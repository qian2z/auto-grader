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
import useResultsDataStore, { ResultsData } from "../resultsStore";
import useSubmissionsDataStore, { SubmissionsData } from "../submissionsStore";
import TabsLayout from "../components/TabsLayout";

const ResultReviewPage = () => {
  const [submissions, setSubmissions] = useState<SubmissionsData>();
  const [results, setResults] = useState<ResultsData>();
  const ss = useSubmissionsDataStore((s) => s.data);
  const sr = useResultsDataStore((s) => s.data);
  const scoreNumber = sr.score.map((score) => extractNumbersFromString(score));

  useEffect(() => {
    setSubmissions({
      title: ss.title,
      body: ss.body,
      name: ss.name,
      number: ss.number,
    });
    setResults({
      score: scoreNumber.map((score) => "" + score[0]!),
      feedback: sr.feedback,
    });
  }, []);

  if (submissions?.number[0] === undefined) return null;

  return (
    <Flex direction="column" gap="3">
      <TabsLayout arr={submissions?.number}>
        {submissions?.number.map((number, index) => (
          <TabsContent value={number} key={number}>
            <ResultBox
              title={submissions?.title}
              body={submissions?.body[index]}
              score={results?.score[index]!}
              feedback={results?.feedback[index]!}
              filename={submissions?.name[index]}
            />
          </TabsContent>
        ))}
      </TabsLayout>
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
