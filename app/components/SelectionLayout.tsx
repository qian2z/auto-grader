import { Box, Flex, Text } from "@radix-ui/themes";
import { ReactElement, ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode | ReactElement;
}

const SelectionLayout = ({ title, children }: Props) => {
  return (
    <Flex direction="column" gap="1">
      <Text as="label" size="3" weight="bold">
        {title}
      </Text>
      <Box ml="3">{children}</Box>
    </Flex>
  );
};

export default SelectionLayout;
