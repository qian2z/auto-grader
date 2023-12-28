import {
  DialogContent,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
  Flex,
  TextArea,
} from "@radix-ui/themes";
import { LuType } from "react-icons/lu";
import SubmissionActionsBox from "./SubmissionActionsBox";
import SubmissionInputBox from "./SubmissionInputBox";
import SubmissionTriggerCard from "./SubmissionTriggerCard";

const SingleSubmissionDialog = () => {
  return (
    <DialogRoot>
      <DialogTrigger>
        <SubmissionTriggerCard title="Single Submission">
          <LuType size={45} />
        </SubmissionTriggerCard>
      </DialogTrigger>
      <DialogContent size="4">
        <DialogTitle>Single Submission</DialogTitle>
        <Flex direction="column" gap="4">
          <SubmissionInputBox title="Essay Title">
            <TextArea
              placeholder="Title..."
              className="border-solid border border-gray-300 h-32"
            />
          </SubmissionInputBox>
          <SubmissionInputBox title="Essay Body">
            <TextArea
              placeholder="Essay..."
              className="border-solid border border-gray-300 h-60"
            />
          </SubmissionInputBox>
        </Flex>
        <SubmissionActionsBox />
      </DialogContent>
    </DialogRoot>
  );
};

export default SingleSubmissionDialog;
