import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button, DialogClose, Flex } from "@radix-ui/themes";
import Link from "next/link";

const SubmissionActionsBox = ({ href }: { href: string }) => {
  return (
    <Flex gap="3" mt="5" justify="end">
      <Button variant="soft" color="gray">
        Back
      </Button>
      <Link href={href}>
        <Button>
          Submit
          <ArrowRightIcon width="16" height="16" />
        </Button>
      </Link>
    </Flex>
  );
};

export default SubmissionActionsBox;
