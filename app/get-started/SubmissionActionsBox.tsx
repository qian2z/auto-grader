import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button, DialogClose, Flex } from "@radix-ui/themes";

const SubmissionActionsBox = () => {
  return (
    <Flex gap="3" mt="5" justify="end">
      <DialogClose>
        <Button variant="soft" color="gray">
          Cancel
        </Button>
      </DialogClose>
      <DialogClose>
        <Button>
          Next
          <ArrowRightIcon width="16" height="16" />
        </Button>
      </DialogClose>
    </Flex>
  );
};

export default SubmissionActionsBox;
