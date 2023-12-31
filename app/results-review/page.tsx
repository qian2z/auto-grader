"use client";
import useFeedback from "@/services/useFeedback";
import useScore from "@/services/useScore";
import useSubmissionDataStore from "../store";

const ResultReviewPage = () => {
  const title = useSubmissionDataStore((e) => e.data.title);
  const body = useSubmissionDataStore((e) => e.data.body);
  const {
    data: scoreResult,
    isLoading: scoreLoading,
    error: scoreError,
  } = useScore(title, body);
  const {
    data: feedbackResult,
    isLoading: feedbackLoading,
    error: feedbackError,
  } = useFeedback(title, body);

  if (scoreLoading || feedbackLoading) return <p>Loading...</p>;

  const score = scoreResult?.choices[0].message.content!;
  const feedback = feedbackResult?.choices[0].message.content;

  return (
    <div>
      <p>{score}</p>
      <p>{feedback}</p>
      <p>{title}</p>
      <p>{body}</p>
    </div>
  );
};

export default ResultReviewPage;
