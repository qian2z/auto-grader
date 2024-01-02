"use client";
import { Flex, TextArea } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { FormEvent, useRef } from "react";
import GradingOptionsSection from "../components/GradingOptionsSection";
import SubmissionActionsBox from "../components/SubmissionActionsBox";
import useSubmissionDataStore from "../submissionStore";

const SingleSubmissionPage = () => {
  const router = useRouter();

  const titleRef = useRef<HTMLTextAreaElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);
  const setEssayTitle = useSubmissionDataStore((s) => s.setTitle);
  const setEssayBody = useSubmissionDataStore((s) => s.setBody);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (titleRef.current && bodyRef.current) {
      setEssayTitle(titleRef.current.value);
      setEssayBody(bodyRef.current.value);
      router.push("/results-loading");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" m="5">
        <Flex gap="4" justify="center" align="center">
          <Flex direction="column" gap="3" className="w-4/5">
            <TextArea
              ref={titleRef}
              placeholder="Essay Title..."
              className="h-24 font-semibold text-2xl"
              size="3"
            />
            <TextArea
              ref={bodyRef}
              placeholder="Essay Body..."
              className="h-96"
            />
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

export default SingleSubmissionPage;
