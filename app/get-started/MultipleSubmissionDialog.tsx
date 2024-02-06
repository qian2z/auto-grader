import {
  DialogContent,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
  Flex,
} from "@radix-ui/themes";
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
        <UploadFilesButton />
      </DialogContent>
    </DialogRoot>
  );
};

export default MultipleSubmissionsDialog;
