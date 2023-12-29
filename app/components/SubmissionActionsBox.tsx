import { Button, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import { BsCheck } from "react-icons/bs";

const SubmissionActionsBox = ({ href }: { href: string }) => {
  return (
    <Flex gap="3" mt="5" justify="end">
      <Link href={"/get-started"}>
        <Button variant="soft" color="gray">
          Back
        </Button>
      </Link>
      <Link href={href}>
        <Button>
          <Flex justify="center" align="center">
            <Text>Submit</Text>
            <BsCheck size={25} />
          </Flex>
        </Button>
      </Link>
    </Flex>
  );
};

export default SubmissionActionsBox;
