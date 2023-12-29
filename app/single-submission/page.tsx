import { Flex, TextArea } from "@radix-ui/themes";
import GradingOptionsSection from "../components/GradingOptionsSection";
import SubmissionActionsBox from "../components/SubmissionActionsBox";

const SingleSubmissionPage = () => {
  return (
    <Flex direction="column">
      <Flex>
        <Flex direction="column" gap="3" className="w-1/2">
          <TextArea
            placeholder="Essay Title..."
            className="h-24 font-semibold text-2xl"
            size="3"
          />
          <TextArea placeholder="Essay Body..." className="h-96" />
        </Flex>
        <Flex direction="column" gap="3">
          <GradingOptionsSection />
        </Flex>
      </Flex>
      <Flex justify="end">
        <SubmissionActionsBox href="/" />
      </Flex>
    </Flex>
  );
};

export default SingleSubmissionPage;
