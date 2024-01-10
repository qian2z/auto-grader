import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { Badge, Blockquote, Flex, Text } from "@radix-ui/themes";

interface Props {
  score: string;
  feedback: string;
}

const FeedbackBox = ({ score, feedback }: Props) => {
  const percentage = (parseInt(score) / 9) * 100;

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
              {score}
            </CircularProgressLabel>
          </CircularProgress>
          <Text>out of 9</Text>
        </Flex>
      </Flex>
      <Flex direction="column" gap="3" className="w-4/5">
        <Badge color="jade" className="w-fit h-5" variant="solid">
          Comment
        </Badge>
        <Blockquote size="3">{feedback}</Blockquote>
      </Flex>
    </Flex>
  );
};

export default FeedbackBox;
