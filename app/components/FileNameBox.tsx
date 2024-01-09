import { Flex, IconButton, Text } from "@radix-ui/themes";
import { FaFile } from "react-icons/fa";

const FileNameBox = ({ filename }: { filename: string }) => {
  return (
    <Flex align="center" gap="2">
      <IconButton>
        <FaFile />
      </IconButton>
      <Text>{filename}</Text>
    </Flex>
  );
};

export default FileNameBox;
