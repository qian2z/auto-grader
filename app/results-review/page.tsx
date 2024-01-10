"use client";
import { extractNumbersFromString } from "@/utils/extractNumbers";
import { Button, Flex, Heading, TabsContent } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa6";
import ResultBox from "../components/ResultBox";
import TabsLayout from "../components/TabsLayout";
import useResultsDataStore, { ResultsData } from "../resultsStore";
import useSubmissionsDataStore, { SubmissionsData } from "../submissionsStore";

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
      <Heading size="4">{submissions.title}</Heading>
      <TabsLayout arr={submissions?.number}>
        {submissions?.number.map((number, index) => (
          <TabsContent value={number} key={number}>
            <ResultBox
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
