"use client";
import { extractNumbersFromString } from "@/utils/extractNumbers";
import { Button, Flex, Heading, TabsContent } from "@radix-ui/themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import CsvExportButton from "../components/CsvExportButton";
import OptionBadgesBox from "../components/OptionBadgesBox";
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
      bodies: ss.bodies,
      names: ss.names,
      numbers: ss.numbers,
      options: ss.options,
    });
    setResults({
      score: scoreNumber.map((score) => "" + score[0]!),
      feedback: sr.feedback,
    });
  }, []);

  const exportData = [
    submissions?.bodies!,
    results?.score!,
    results?.feedback!,
  ];

  if (submissions?.numbers[0] === undefined) return null;

  return (
    <Flex direction="column" gap="3">
      <Heading size="4">{submissions.title}</Heading>
      <OptionBadgesBox options={submissions.options} />
      <TabsLayout arr={submissions?.numbers}>
        {submissions?.numbers.map((number, index) => (
          <TabsContent value={number} key={number}>
            <ResultBox
              body={submissions?.bodies[index]}
              score={results?.score[index]!}
              feedback={results?.feedback[index]!}
              filename={submissions?.names[index]}
              scale={submissions.options.scale}
            />
          </TabsContent>
        ))}
      </TabsLayout>
      <Flex justify="end" gap="3">
        <Link href="/">
          <Button color="yellow">
            <FaHome />
            Home
          </Button>
        </Link>
        <CsvExportButton data={exportData} filename="autograder-results" />
      </Flex>
    </Flex>
  );
};

export default ResultReviewPage;
