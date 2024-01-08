"use client";
import { extractNumbersFromString } from "@/utils/extractNumbers";
import {
  Badge,
  Button,
  Flex,
  Separator,
  Text,
  TextArea,
} from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa6";
import useResultDataStore from "../resultStore";
import useSubmissionDataStore from "../submissionStore";

const ResultReviewPage = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [score, setScore] = useState("");
  const [feedback, setFeedback] = useState("");

  const storedScore = useResultDataStore((s) => s.data.score);
  const scoreNumber = extractNumbersFromString(storedScore);
  const storedFeedback = useResultDataStore((s) => s.data.feedback);
  const storedTitle = useSubmissionDataStore((s) => s.data.title);
  const storedBody = useSubmissionDataStore((s) => s.data.body);

  useEffect(() => {
    setTitle(storedTitle);
    setBody(storedBody);
    setScore("" + scoreNumber[0]!);
    setFeedback(storedFeedback);
  }, []);

  return (
    <Flex direction="column" gap="3">
      <Flex gap="6" justify="center" align="start" m="5">
        <Flex direction="column" gap="3" className="w-full">
          <TextArea
            value={title}
            className="h-24 font-semibold"
            size="3"
            disabled
          />
          <TextArea value={body} size="3" className="h-96" disabled />
        </Flex>
        <Flex direction="column" className="w-2/5">
          <Flex direction="column" gap="2">
            <Badge color="orange" className="w-fit">
              Overall Rating
            </Badge>
            <Text size="6" weight="bold">
              {score}
            </Text>
          </Flex>
          <Separator my="3" size="4" />
          <Flex direction="column" gap="2">
            <Badge color="jade" className="w-fit">
              Comment
            </Badge>
            <Text size="3">{feedback}</Text>
          </Flex>
        </Flex>
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
