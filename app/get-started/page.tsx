import { Flex, Separator } from "@radix-ui/themes";
import Link from "next/link";
import { LuType } from "react-icons/lu";
import MultipleSubmissionsDialog from "./MultipleSubmissionDialog";
import SubmissionTriggerCard from "./SubmissionTriggerCard";

const GetStartedPage = () => {
  return (
    <Flex align="center" justify="center" p="9" m="9">
      <Flex align="center" gap="4">
        <Link href="/single-submission">
          <SubmissionTriggerCard title="Single Submission">
            <LuType size={45} />
          </SubmissionTriggerCard>
        </Link>
        <Separator orientation="vertical" size="3" />
        <MultipleSubmissionsDialog />
      </Flex>
    </Flex>
  );
};

export default GetStartedPage;
