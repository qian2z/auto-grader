import {
  Button,
  DialogClose,
  DialogContent,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
  Flex,
} from "@radix-ui/themes";
import Link from "next/link";
import { BsFiletypeDocx, BsFiletypePdf } from "react-icons/bs";
import SubmissionTriggerCard from "./SubmissionTriggerCard";
import UploadFilesButton from "./UploadFilesButton";

const MultipleSubmissionsDialog = () => {
  return (
    <DialogRoot>
      <DialogTrigger>
        <SubmissionTriggerCard title="Multiple Submission(s)">
          <Flex>
            <BsFiletypePdf size={45} />
            <BsFiletypeDocx size={45} />
          </Flex>
        </SubmissionTriggerCard>
      </DialogTrigger>
      <DialogContent size="4">
        <DialogTitle>Upload Essay Body</DialogTitle>
        <Flex direction="column" mt="4">
          <UploadFilesButton />
        </Flex>
        <Flex gap="3" mt="5" justify="end">
          <DialogClose>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </DialogClose>
          <DialogClose>
            <Link href="/multiple-submissions">
              <Button type="submit">Next</Button>
            </Link>
          </DialogClose>
        </Flex>
      </DialogContent>
    </DialogRoot>
  );
};

export default MultipleSubmissionsDialog;
