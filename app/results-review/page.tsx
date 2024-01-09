"use client";
import { extractNumbersFromString } from "@/utils/extractNumbers";
import { Flex, Text } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import useResultsDataStore from "../resultsStore";
import useSubmissionsDataStore from "../submissionsStore";

const ResultReviewPage = () => {
  const [title, setTitle] = useState("");
  const [bodies, setBodies] = useState<string[]>([]);
  const [scores, setScores] = useState<string[]>([]);
  const [feedbacks, setFeedbacks] = useState<string[]>([]);

  const storedScore = useResultsDataStore((s) => s.data.score);
  const scoreNumber = storedScore.map((score) =>
    extractNumbersFromString(score)
  );
  const storedFeedback = useResultsDataStore((s) => s.data.feedback);
  const storedTitle = useSubmissionsDataStore((s) => s.data.title);
  const storedBody = useSubmissionsDataStore((s) => s.data.body);

  useEffect(() => {
    setTitle(storedTitle);
    setBodies(storedBody);
    setScores(scoreNumber.map((score) => "" + score[0]!));
    setFeedbacks(storedFeedback);
  }, []);

  return (
    <div>
      {bodies.map((body, index) => (
        <Flex key={index} className="border-solid" direction="column" gap="3">
          <Text>{title}</Text>
          <Text>{body}</Text>
          <Text>{scores[index]}</Text>
          <Text>{feedbacks[index]}</Text>
        </Flex>
      ))}
    </div>
  );
};

export default ResultReviewPage;
