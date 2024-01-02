"use client";
import { Flex, TextArea } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import GradingOptionsSection from "../components/GradingOptionsSection";
import SubmissionActionsBox from "../components/SubmissionActionsBox";
import useSubmissionsDataStore from "../submissionsStore";

const MultipleSubmissionPage = () => {
  const [multipleBody, setMultipleBody] = useState<string[]>([]);
  const storedMultipleBody = useSubmissionsDataStore((s) => s.data.body);

  useEffect(() => {
    setMultipleBody(storedMultipleBody);
  }, []);

  return (
    <Flex direction="column" m="5">
      <Flex gap="4" justify="center" align="center">
        <Flex direction="column" gap="3" className="w-4/5">
          <TextArea
            placeholder="Essay Title..."
            className="h-24 font-semibold text-2xl"
            size="3"
          />
          {/* <TextArea placeholder="Essay Body..." className="h-96" /> */}
          {multipleBody.map((body) => (
            <p key={body}>{body}</p>
          ))}
        </Flex>
        <Flex direction="column" gap="5">
          <GradingOptionsSection />
        </Flex>
      </Flex>
      <Flex justify="end">
        <SubmissionActionsBox />
      </Flex>
    </Flex>
  );
};

export default MultipleSubmissionPage;
