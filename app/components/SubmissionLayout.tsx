import { Flex, TextArea } from "@radix-ui/themes";
import React, { FormEvent, ReactNode, RefObject } from "react";
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
      <Flex direction="column" m="5">
        <Flex gap="6" justify="center" align="start">
          <Flex direction="column" gap="3" className="w-4/5">
            <TextArea
              ref={titleRef}
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
          <SubmissionActionsBox />
        </Flex>
      </Flex>
    </form>
  );
};

export default SubmissionLayout;
