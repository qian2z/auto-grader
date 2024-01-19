import { extractNumbersFromString } from "@/utils/extractNumbers";
import {
  CircularProgress,
  CircularProgressLabel,
  NumberInput,
  NumberInputField,
  Textarea,
} from "@chakra-ui/react";
import { Badge, Blockquote, Button, Flex, Text } from "@radix-ui/themes";
import { useEffect, useRef, useState } from "react";
import { FaSave } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import useResultsDataStore from "../resultsStore";

interface Props {
  score: string;
  feedback: string;
  scale: string;
  index: number;
}

const FeedbackBox = ({ score, feedback, scale, index }: Props) => {
  const scoreNumber = "" + extractNumbersFromString(score)[0];
  const newScore = scoreNumber === "undefined" ? "0" : scoreNumber;
  const newFeedback = scoreNumber === "undefined" ? score : feedback;
  const percentage = (parseInt(newScore) / parseInt(scale)) * 100;

  const [isEditing, setEditing] = useState(false);
  const [currentScore, setCurrentScore] = useState(newScore);
  const [currentFeedback, setCurrentFeedback] = useState(newFeedback);

  const setStoredScore = useResultsDataStore((s) => s.setSpecificScore);
  const setStoredFeedback = useResultsDataStore((s) => s.setSpecificFeedback);
  const scoreRef = useRef<HTMLInputElement>(null);
  const feedbackRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setStoredScore(index, currentScore);
    setStoredFeedback(index, currentFeedback);
  }, [index, currentScore, currentFeedback, setStoredScore, setStoredFeedback]);

  return (
    <Flex direction="column" gap="2" width="100%">
      <Flex direction="row" className="min-h-36">
        <Flex direction="column" gap="3" className="w-1/5" align="center">
          <Badge color="orange" className="w-fit h-5" variant="solid">
            Overall Rating
          </Badge>
          <Flex
            direction="column"
            align="center"
            justify="center"
            gap="2"
            className="h-full"
          >
            <CircularProgress
              size="85px"
              value={percentage}
              color="orange.500"
              justifyContent="center"
            >
              <CircularProgressLabel fontWeight="bold" width="50%">
                {isEditing ? (
                  <NumberInput
                    defaultValue={currentScore}
                    size="sm"
                    min={0}
                    max={parseInt(scale)}
                  >
                    <NumberInputField
                      px="2"
                      textAlign="center"
                      ref={scoreRef}
                    />
                  </NumberInput>
                ) : (
                  <Text size="4">{currentScore}</Text>
                )}
              </CircularProgressLabel>
            </CircularProgress>
            <Text>out of {scale}</Text>
          </Flex>
        </Flex>
        <Flex direction="column" gap="3" className="w-4/5">
          <Badge color="jade" className="w-fit h-5" variant="solid">
            Comment
          </Badge>
          {isEditing ? (
            <Flex className="w-full">
              <Textarea
                className="w-full"
                h={56}
                defaultValue={currentFeedback}
                ref={feedbackRef}
                required
              />
            </Flex>
          ) : (
            <Blockquote size="3">{currentFeedback}</Blockquote>
          )}
        </Flex>
      </Flex>
      <Flex justify="end">
        <Button
          color="tomato"
          onClick={(e) => {
            if (scoreRef.current && feedbackRef.current) {
              e.preventDefault();
              setCurrentScore(scoreRef.current.value);
              setCurrentFeedback(feedbackRef.current.value);
            }
            setEditing(!isEditing);
          }}
        >
          {isEditing ? <FaSave /> : <MdEdit />}
          {isEditing ? "Save" : "Edit"}
        </Button>
      </Flex>
    </Flex>
  );
};

export default FeedbackBox;
