import {
  DialogContent,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
  Flex,
  TextArea,
} from "@radix-ui/themes";
import { BsFiletypeDocx, BsFiletypePdf } from "react-icons/bs";
import SubmissionActionsBox from "./SubmissionActionsBox";
import SubmissionInputBox from "./SubmissionInputBox";
import SubmissionTriggerCard from "./SubmissionTriggerCard";
import UploadFilesButton from "./UploadFilesButton";

const MultipleSubmissionsDialog = () => {
  return (
    <DialogRoot>
      <DialogTrigger>
        <SubmissionTriggerCard title="Multiple Submission(s)">
          <Flex>
            <BsFiletypePdf size={40} />
            <BsFiletypeDocx size={40} />
          </Flex>
        </SubmissionTriggerCard>
      </DialogTrigger>
      <DialogContent size="4">
        <DialogTitle>Mutiple Submissions</DialogTitle>
        <Flex direction="column" gap="4">
          <SubmissionInputBox title="Essay Title">
            <TextArea
              placeholder="Title..."
              className="border-solid border border-gray-300 h-32"
            />
          </SubmissionInputBox>
          <SubmissionInputBox title="Essay Body">
            <UploadFilesButton />
          </SubmissionInputBox>
        </Flex>
        <SubmissionActionsBox />
      </DialogContent>
    </DialogRoot>
  );
};

export default MultipleSubmissionsDialog;
