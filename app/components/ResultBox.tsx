import { Badge, Flex, Separator, Text, TextArea } from "@radix-ui/themes";
import FileNameBox from "./FileNameBox";

interface Props {
  title: string;
  body: string;
  score: string;
  feedback: string;
  filename: string;
}

const ResultBox = ({ title, body, score, feedback, filename }: Props) => {
  return (
    <Flex gap="6" justify="center" align="start" m="5">
      <Flex direction="column" gap="3" className="w-full">
        <FileNameBox filename={filename} />
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
  );
};

export default ResultBox;
