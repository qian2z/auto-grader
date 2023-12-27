import { Flex, Text } from "@radix-ui/themes";
import { ReactNode } from "react";

const SubmissionInputBox = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <Flex direction="column" gap="4">
      <Text as="div" size="3" mb="1" weight="bold">
        {title}
      </Text>
      {children}
    </Flex>
  );
};

export default SubmissionInputBox;
