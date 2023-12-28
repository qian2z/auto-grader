import { Flex, Text } from "@radix-ui/themes";
import { LuFileStack } from "react-icons/lu";

const UploadFilesButton = () => {
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
        Click Here to Upload .pdf or .docx File(s)
      </label>
      <input
        type="file"
        id="file-upload"
        multiple
        accept=".pdf, .docx"
        className="hidden"
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
              1 File(s) Selected
            </Text>
          </Flex>
        </Flex>
      </label>
    </Flex>
  );
};

export default UploadFilesButton;
