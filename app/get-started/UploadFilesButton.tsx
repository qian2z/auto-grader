"use client";
import convertExtractPdfText from "@/utils/convertExtractPdfText";
import { Flex, Kbd, Text } from "@radix-ui/themes";
import mammoth from "mammoth";
import { useState } from "react";
import { IoMdDoneAll } from "react-icons/io";
import { LuFileStack } from "react-icons/lu";
import useSubmissionsDataStore from "../submissionsStore";

const UploadFilesButton = () => {
  const [extractedText, setExtractedText] = useState<string[]>([]);
  const [fileName, setFileName] = useState<string[]>([]);
  const [fileNumber, setFileNumber] = useState<string[]>([]);
  const [fileLength, setFileLength] = useState(0);
  const [isReady, setReady] = useState(false);
  const setMultipleBody = useSubmissionsDataStore((s) => s.setBodies);
  const setMultipleName = useSubmissionsDataStore((s) => s.setNames);
  const setMultipleNumber = useSubmissionsDataStore((s) => s.setNumbers);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (files) {
      setFileLength(files.length);
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        try {
          if (file.type === "application/pdf") {
            const converted = convertExtractPdfText(file);
            if (await converted) {
              converted.then((result) =>
                setExtractedText((prevExtractedText) => [
                  ...prevExtractedText,
                  result,
                ])
              );
            }
          } else {
            const arrayBuffer = await file.arrayBuffer();
            const result = await mammoth.extractRawText({ arrayBuffer });
            const text = result.value;
            if (text) {
              setExtractedText((prevExtractedText) => [
                ...prevExtractedText,
                text,
              ]);
            }
          }
          setFileName((prevFileName) => [...prevFileName, file.name]);
          setFileNumber((prevFileNumber) => [...prevFileNumber, "" + (i + 1)]);
        } catch (error) {
          console.error("Error reading .docx file:", error);
        }
      }
      setReady(true);
    }
  };

  if (extractedText.length === fileLength) {
    setMultipleBody(extractedText);
    setMultipleName(fileName);
    setMultipleNumber(fileNumber);
  }

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      p="8"
      gap="5"
      className="bg-sky-100 rounded-lg border-dashed border-2 border-gray-300"
    >
      <label
        htmlFor="file-upload"
        className="block text-center text-gray-600 font-semibold text-lg cursor-pointer"
      >
        Click Here to Upload <Kbd>{"PDF"}</Kbd> or <Kbd>{"DOCX"}</Kbd> File(s)
      </label>
      <input
        type="file"
        id="file-upload"
        multiple
        accept=".pdf, .docx"
        className="hidden"
        onChangeCapture={handleFileChange}
      />
      <label htmlFor="file-upload" className="cursor-pointer">
        <Flex justify="center" align="center">
          <Flex
            direction="column"
            justify="center"
            align="center"
            p="4"
            className="bg-white rounded-md shadow-md"
          >
            <LuFileStack size={30} />
            <Text color="gray" size="3" mt="3">
              {fileLength} File(s) Selected
            </Text>
          </Flex>
        </Flex>
      </label>
      {isReady ? (
        <Flex gap="2" justify="center" align="center">
          <Text color="green" weight="bold">
            Upload Completed
          </Text>
          <IoMdDoneAll />
        </Flex>
      ) : (
        <Text color="red" weight="bold">
          Please Wait for Upload Complete!
        </Text>
      )}
    </Flex>
  );
};

export default UploadFilesButton;
