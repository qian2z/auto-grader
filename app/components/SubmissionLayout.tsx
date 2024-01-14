import { Textarea } from "@chakra-ui/react";
import { Flex } from "@radix-ui/themes";
import { FormEvent, ReactNode, RefObject } from "react";
import GradingOptionsSection from "./GradingOptionsSection";
import SubmissionActionsBox from "./SubmissionActionsBox";

interface Props {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  titleRef: RefObject<HTMLTextAreaElement>;
  children: ReactNode;
}

const SubmissionLayout = ({ handleSubmit, titleRef, children }: Props) => {
  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column">
        <Flex gap="6" justify="center" align="start">
          <Flex direction="column" gap="3" className="w-4/5">
            <Textarea
              ref={titleRef}
              placeholder="Essay Title"
              h={28}
              size="lg"
              fontWeight="bold"
              required
            />
            {children}
          </Flex>
          <Flex direction="column" gap="5">
            <GradingOptionsSection />
          </Flex>
        </Flex>
        <Flex justify="end">
          <SubmissionActionsBox />
        </Flex>
      </Flex>
    </form>
  );
};

export default SubmissionLayout;
