"use client";
import { extractNumbersFromString } from "@/services/extractNumbers";
import useScore from "@/services/useScore";
import useSubmissionDataStore from "../store";

const ResultReviewPage = () => {
  const title = useSubmissionDataStore((e) => e.data.title);
  const body = useSubmissionDataStore((e) => e.data.body);
  const { data: scoreResult, isLoading, error } = useScore(title, body);
  const score = extractNumbersFromString(
    scoreResult?.choices[0].message.content!
  );

  return <div>{score}</div>;
};

export default ResultReviewPage;
