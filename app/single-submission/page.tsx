"use client";
import { Textarea } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { FormEvent, useRef } from "react";
import SubmissionLayout from "../components/SubmissionLayout";
import useSubmissionsDataStore from "../submissionsStore";

const SingleSubmissionPage = () => {
  const router = useRouter();

  const titleRef = useRef<HTMLTextAreaElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);
  const setEssayTitle = useSubmissionsDataStore((s) => s.setTitle);
  const setEssayBody = useSubmissionsDataStore((s) => s.setBodies);
  const setEssayName = useSubmissionsDataStore((s) => s.setNames);
  const setEssayNumber = useSubmissionsDataStore((s) => s.setNumbers);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (titleRef.current && bodyRef.current) {
      setEssayTitle(titleRef.current.value);
      setEssayBody([bodyRef.current.value]);
      setEssayName(["Single Submission"]);
      setEssayNumber(["1"]);
      router.push("/results-credit");
    }
  };

  return (
    <SubmissionLayout handleSubmit={handleSubmit} titleRef={titleRef}>
      <Textarea
        ref={bodyRef}
        placeholder="Essay Body"
        h={96}
        size="md"
        required
      />
    </SubmissionLayout>
  );
};

export default SingleSubmissionPage;
