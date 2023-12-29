import { Card, Flex, Inset, Text } from "@radix-ui/themes";
import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  title: string;
  href: string;
  children: ReactNode;
}

const SubmissionTriggerCard = ({ title, href, children }: Props) => {
  return (
    <Link href={href}>
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
    </Link>
  );
};

export default SubmissionTriggerCard;
