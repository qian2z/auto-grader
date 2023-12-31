import { Flex, TextArea } from "@radix-ui/themes";
import { ReactNode } from "react";
import GradingOptionsSection from "./GradingOptionsSection";
import SubmissionActionsBox from "./SubmissionActionsBox";

const SubmissionPageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Flex direction="column" m="5">
      <Flex gap="4" justify="center" align="center">
        <Flex direction="column" gap="3" className="w-4/5">
          <TextArea
            placeholder="Essay Title..."
            className="h-24 font-semibold text-2xl"
            size="3"
          />
          {children}
        </Flex>
        <Flex direction="column" gap="5">
          <GradingOptionsSection />
        </Flex>
      </Flex>
      <Flex justify="end">
        <SubmissionActionsBox href="/results-review" />
      </Flex>
    </Flex>
  );
};

export default SubmissionPageLayout;
