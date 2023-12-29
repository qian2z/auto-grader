import { Flex, Separator } from "@radix-ui/themes";
import { BsFiletypeDocx, BsFiletypePdf } from "react-icons/bs";
import { LuType } from "react-icons/lu";
import SubmissionTriggerCard from "../components/SubmissionTriggerCard";

const GetStartedPage = () => {
  return (
    <Flex align="center" justify="center" p="9" m="9">
      <Flex align="center" gap="4">
        <SubmissionTriggerCard
          href="/single-submission"
          title="Single Submission"
        >
          <LuType size={45} />
        </SubmissionTriggerCard>
        <Separator orientation="vertical" size="3" />
        <SubmissionTriggerCard
          href="/multiple-submissions"
          title="Multiple Submission(s)"
        >
          <Flex>
            <BsFiletypePdf size={45} />
            <BsFiletypeDocx size={45} />
          </Flex>
        </SubmissionTriggerCard>
      </Flex>
    </Flex>
  );
};

export default GetStartedPage;
