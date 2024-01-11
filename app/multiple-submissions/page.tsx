"use client";
import { Flex, TabsContent, Text } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useRef, useState } from "react";
import FileNameBox from "../components/FileNameBox";
import SubmissionLayout from "../components/SubmissionLayout";
import TabsLayout from "../components/TabsLayout";
import useSubmissionsDataStore, { SubmissionsData } from "../submissionsStore";

const MultipleSubmissionPage = () => {
  const router = useRouter();
  const clearSubmission = useSubmissionsDataStore((s) => s.clearSubmission);

  const titleRef = useRef<HTMLTextAreaElement>(null);
  const [submissions, setSubmissions] = useState<SubmissionsData>();
  const ss = useSubmissionsDataStore((s) => s.data);
  const setEssayTitle = useSubmissionsDataStore((s) => s.setTitle);

  useEffect(() => {
    clearSubmission();
    setSubmissions({
      title: ss.title,
      bodies: ss.bodies,
      names: ss.names,
      numbers: ss.numbers,
      options: ss.options,
    });
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (titleRef.current) {
      setEssayTitle(titleRef.current.value);
      router.push("/results-loading");
    }
  };

  if (submissions?.numbers[0] === undefined) return null;

  return (
    <SubmissionLayout handleSubmit={handleSubmit} titleRef={titleRef}>
      <TabsLayout arr={submissions?.numbers}>
        {submissions?.numbers.map((number, index) => (
          <TabsContent value={number} key={number}>
            <Flex direction="column" gap="3">
              <FileNameBox filename={submissions.names[index]} />
              <Text size="3">{submissions.bodies[index]}</Text>
            </Flex>
          </TabsContent>
        ))}
      </TabsLayout>
    </SubmissionLayout>
  );
};

export default MultipleSubmissionPage;
