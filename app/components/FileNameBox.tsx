import { Flex, IconButton, Kbd } from "@radix-ui/themes";
import { FaFile } from "react-icons/fa";

const FileNameBox = ({ filename }: { filename: string }) => {
  return (
    <Flex align="center" gap="3">
      <IconButton>
        <FaFile />
      </IconButton>
      <Kbd size="4">{filename}</Kbd>
    </Flex>
  );
};

export default FileNameBox;
