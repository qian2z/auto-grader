import { Flex, Text } from "@radix-ui/themes";
import { LuFileStack } from "react-icons/lu";

const UploadFilesButton = () => {
  return (
    <Flex
      direction="column"
      p="8"
      className="bg-sky-100 rounded-lg border-dashed border-2 border-gray-300"
    >
      <label
        htmlFor="file-upload"
        className="block text-center text-gray-600 font-semibold mb-4 text-lg"
      >
        Click Here to Upload PDF File(s)
      </label>
      <input type="file" id="file-upload" multiple className="hidden" />
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
    </Flex>
  );
};

export default UploadFilesButton;
