import { detail_levels } from "@/index/details";
import { Flex, RadioGroup, Text } from "@radix-ui/themes";
import SelectionLayout from "./SelectionLayout";

interface Props {
  detail: string;
  setDetail: (detail: string) => void;
}

const FeedbackLevelOption = ({ detail, setDetail }: Props) => {
  return (
    <SelectionLayout title="Feedback Detail Level">
      <RadioGroup.Root
        defaultValue={detail}
        onValueChange={(value) => setDetail(value)}
      >
        <Flex gap="2" direction="column">
          {detail_levels.map((level) => (
            <Text as="label" size="2" key={level.id}>
              <Flex gap="2">
                <RadioGroup.Item value={level.value} />
                {level.label}
              </Flex>
            </Text>
          ))}
        </Flex>
      </RadioGroup.Root>
    </SelectionLayout>
  );
};

export default FeedbackLevelOption;
