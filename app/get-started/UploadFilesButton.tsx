"use client";
import { Flex, Text } from "@radix-ui/themes";
import mammoth from "mammoth";
import { useState } from "react";
import { LuFileStack } from "react-icons/lu";
import useSubmissionsDataStore from "../submissionsStore";

const UploadFilesButton = () => {
  const [extractedText, setExtractedText] = useState<string[]>([]);
  const [filename, setFilename] = useState<string[]>([]);
  const [fileLength, setFileLength] = useState(0);
  const setMultipleBody = useSubmissionsDataStore((s) => s.setBody);
  const setMultipleName = useSubmissionsDataStore((s) => s.setName);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (files) {
      setFileLength(files.length);
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        try {
          const arrayBuffer = await file.arrayBuffer();
          const result = await mammoth.extractRawText({ arrayBuffer });
          const text = result.value;
          console.log(`Text from file ${file.name}:`, text);
          setExtractedText((prevExtractedText) => [...prevExtractedText, text]);
          setFilename((prevFilename) => [...prevFilename, "" + (i + 1)]);
        } catch (error) {
          console.error("Error reading .docx file:", error);
        }
      }
    }
  };

  setMultipleBody(extractedText);
  setMultipleName(filename);

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      p="8"
      gap="4"
      className="bg-sky-100 rounded-lg border-dashed border-2 border-gray-300"
    >
      <label
        htmlFor="file-upload"
        className="block text-center text-gray-600 font-semibold text-lg cursor-pointer"
      >
        Click Here to Upload .docx File(s)
      </label>
      <input
        type="file"
        id="file-upload"
        multiple
        accept=".docx"
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
    </Flex>
  );
};

export default UploadFilesButton;
