import { Card, Flex, Inset, Text } from "@radix-ui/themes";
import { ReactNode } from "react";

const SubmissionTriggerCard = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <Card className="hover:font-medium hover:bg-sky-50 cursor-pointer transition-colors">
      <Flex
        direction="column"
        align="center"
        justify="center"
        className="w-96 h-60 m-5"
      >
        <Inset clip="padding-box" side="top" pb="current" mb="2">
          {children}
        </Inset>
        <Text size="5">{title}</Text>
      </Flex>
    </Card>
  );
};

export default SubmissionTriggerCard;
