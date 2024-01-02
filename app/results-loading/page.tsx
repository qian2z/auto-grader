"use client";
import useFeedback from "@/hooks/useFeedback";
import useScore from "@/hooks/useScore";
import { useRouter } from "next/navigation";
import useResultDataStore from "../resultStore";

const ResultLoadingPage = () => {
  const { data: scoreResult, isLoading: scoreLoading } = useScore();
  const { data: feedbackResult, isLoading: feedbackLoading } = useFeedback();
  const newScore = scoreResult?.choices[0].message.content;
  const setScore = useResultDataStore((s) => s.setScore);

  const newFeedback = feedbackResult?.choices[0].message.content;
  const setFeedback = useResultDataStore((s) => s.setFeedback);

  setScore(newScore!);
  setFeedback(newFeedback!);

  if (scoreLoading || feedbackLoading) return <p>Loading...</p>;

  const router = useRouter();
  router.push("/results-review");

  return <div>Loading...</div>;
};

export default ResultLoadingPage;
