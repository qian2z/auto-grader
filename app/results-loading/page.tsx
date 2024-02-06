"use client";
import useFeedbacks from "@/hooks/useFeedbacks";
import useScores from "@/hooks/useScores";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import ResultSkeleton from "../components/ResultSkeleton";
import ResultErrorPage from "../results-review/error";
import useResultsDataStore from "../resultsStore";
import useSubmissionsDataStore from "../submissionsStore";

const ResultLoadingPage = () => {
  const storedData = useSubmissionsDataStore((s) => s.data);
  const setScore = useResultsDataStore((s) => s.setScore);
  const setFeedback = useResultsDataStore((s) => s.setFeedback);

  const scoreResults = useScores(storedData);
  const feedbackResults = useFeedbacks(storedData);
  const scoreError = scoreResults.some((query) => query.error);
  const feedbackError = feedbackResults.some((query) => query.error);
  const scoreLoading = scoreResults.some((query) => query.isLoading);
  const feedbackLoading = feedbackResults.some((query) => query.isLoading);

  const scoreArray = scoreResults.map(
    (query) => query.data?.data.choices[0].message.content!
  );
  const feedbackArray = feedbackResults.map(
    (query) => query.data?.data.choices[0].message.content!
  );

  const router = useRouter();

  useEffect(() => {
    if (!scoreLoading && !feedbackLoading) {
      setScore(scoreArray);
      setFeedback(feedbackArray);
      router.push("/results-review");
    }
  }, [scoreLoading, feedbackLoading, router]);

  if (scoreError || feedbackError) return <ResultErrorPage />;

  if (scoreLoading || feedbackLoading) return <ResultSkeleton />;

  return <ResultSkeleton />;
};

export default ResultLoadingPage;
