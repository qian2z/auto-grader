"use client";
import { useEffect, useState } from "react";
import useResultDataStore from "../resultStore";
import useSubmissionDataStore from "../submissionStore";

const ResultReviewPage = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [score, setScore] = useState("");
  const [feedback, setFeedback] = useState("");

  const storedScore = useResultDataStore((s) => s.data.score);
  const storedFeedback = useResultDataStore((s) => s.data.feedback);
  const storedTitle = useSubmissionDataStore((s) => s.data.title);
  const storedBody = useSubmissionDataStore((s) => s.data.body);

  useEffect(() => {
    setTitle(storedTitle);
    setBody(storedBody);
    setScore(storedScore);
    setFeedback(storedFeedback);
  }, []);

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
