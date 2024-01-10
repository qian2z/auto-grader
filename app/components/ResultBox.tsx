import {
  Badge,
  Box,
  Flex,
  ScrollArea,
  Separator,
  Text,
} from "@radix-ui/themes";
import FeedbackBox from "./FeedbackBox";
import FileNameBox from "./FileNameBox";

interface Props {
  body: string;
  score: string;
  feedback: string;
  filename: string;
}

const ResultBox = ({ body, score, feedback, filename }: Props) => {
  return (
    <Flex direction="column" gap="4" justify="center" align="start" m="5">
      <FileNameBox filename={filename} />
      <Separator size="4" />
      <FeedbackBox score={score} feedback={feedback} />
      <Separator size="4" />
      <Flex direction="column" gap="2">
        <Badge color="blue" className="w-fit" variant="solid">
          Essay Body
        </Badge>
        <ScrollArea type="auto" scrollbars="vertical" style={{ height: 190 }}>
          <Box mr="3">
            <Text as="p">{body}</Text>
          </Box>
        </ScrollArea>
      </Flex>
    </Flex>
  );
};

export default ResultBox;
