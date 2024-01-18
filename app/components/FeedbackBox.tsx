import { extractNumbersFromString } from "@/utils/extractNumbers";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { Badge, Blockquote, Flex, Text } from "@radix-ui/themes";

interface Props {
  score: string;
  feedback: string;
  scale: string;
}

const FeedbackBox = ({ score, feedback, scale }: Props) => {
  const scoreNumber = "" + extractNumbersFromString(score)[0];
  const newScore = scoreNumber === "undefined" ? "0" : score;
  const newFeedback = scoreNumber === "undefined" ? score : feedback;
  const percentage = (parseInt(newScore) / parseInt(scale)) * 100;

  return (
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
          <CircularProgress size="75px" value={percentage} color="orange.500">
            <CircularProgressLabel fontWeight="bold">
              {newScore}
            </CircularProgressLabel>
          </CircularProgress>
          <Text>out of {scale}</Text>
        </Flex>
      </Flex>
      <Flex direction="column" gap="3" className="w-4/5">
        <Badge color="jade" className="w-fit h-5" variant="solid">
          Comment
        </Badge>
        <Blockquote size="3">{newFeedback}</Blockquote>
      </Flex>
    </Flex>
  );
};

export default FeedbackBox;
