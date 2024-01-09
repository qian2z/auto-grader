"use client";
import useFeedback from "@/hooks/useFeedback";
import useScore from "@/hooks/useScore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useResultDataStore from "../resultStore";
import useSubmissionDataStore from "../submissionStore";

const ResultLoadingPage = () => {
  const storedTitle = useSubmissionDataStore((s) => s.data.title);
  const storedBody = useSubmissionDataStore((s) => s.data.body);

  const { data: scoreResult, isLoading: scoreLoading } = useScore(
    storedTitle!,
    storedBody!
  );
  const { data: feedbackResult, isLoading: feedbackLoading } = useFeedback(
    storedTitle!,
    storedBody!
  );
  const newScore = scoreResult?.choices[0].message.content;
  const setScore = useResultDataStore((s) => s.setScore);

  const newFeedback = feedbackResult?.choices[0].message.content;
  const setFeedback = useResultDataStore((s) => s.setFeedback);

  setScore(newScore!);
  setFeedback(newFeedback!);

  const router = useRouter();
  useEffect(() => {
    if (!scoreLoading && !feedbackLoading) {
      router.push("/results-review");
    }
  }, [scoreLoading, feedbackLoading, router]);

  if (scoreLoading || feedbackLoading) return <p>Loading...</p>;

  return <div>Loading...</div>;
};

export default ResultLoadingPage;
