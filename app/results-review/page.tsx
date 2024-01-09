"use client";
import { extractNumbersFromString } from "@/utils/extractNumbers";
import {
  Box,
  Button,
  Flex,
  TabsContent,
  TabsList,
  TabsRoot,
  TabsTrigger,
} from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa6";
import ResultBox from "../components/ResultBox";
import useResultsDataStore from "../resultsStore";
import useSubmissionsDataStore from "../submissionsStore";

const ResultReviewPage = () => {
  const [title, setTitle] = useState("");
  const [bodies, setBodies] = useState<string[]>([]);
  const [scores, setScores] = useState<string[]>([]);
  const [feedbacks, setFeedbacks] = useState<string[]>([]);
  const [multipleName, setMultipleName] = useState<string[]>([]);

  const storedTitle = useSubmissionsDataStore((s) => s.data.title);
  const storedBody = useSubmissionsDataStore((s) => s.data.body);
  const storedFilename = useSubmissionsDataStore((s) => s.data.name);
  const storedScore = useResultsDataStore((s) => s.data.score);
  const scoreNumber = storedScore.map((score) =>
    extractNumbersFromString(score)
  );
  const storedFeedback = useResultsDataStore((s) => s.data.feedback);

  useEffect(() => {
    setTitle(storedTitle);
    setBodies(storedBody);
    setScores(scoreNumber.map((score) => "" + score[0]!));
    setFeedbacks(storedFeedback);
    setMultipleName(storedFilename);
  }, []);

  if (multipleName[0] === undefined) return null;

  return (
    <Flex direction="column" gap="3">
      <Flex>
        <TabsRoot defaultValue={multipleName[0]} className="w-full">
          <TabsList>
            {multipleName.map((name) => (
              <TabsTrigger value={name} key={name}>
                {name}
              </TabsTrigger>
            ))}
          </TabsList>
          <Box m="3">
            {multipleName.map((name, index) => (
              <TabsContent value={name} key={name}>
                <ResultBox
                  title={title}
                  body={bodies[index]}
                  score={scores[index]}
                  feedback={feedbacks[index]}
                />
              </TabsContent>
            ))}
          </Box>
        </TabsRoot>
      </Flex>
      <Flex justify="end">
        <Button>
          <FaDownload />
          Download .csv
        </Button>
      </Flex>
    </Flex>
  );
};

export default ResultReviewPage;
