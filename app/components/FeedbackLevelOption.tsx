import { Flex, RadioGroup, Text } from "@radix-ui/themes";
import SelectionInputBox from "./SelectionInputBox";

const FeedbackLevelOption = () => {
  return (
    <SelectionInputBox title="Feedback Detail Level">
      <RadioGroup.Root defaultValue="2">
        <Flex gap="2" direction="column">
          <Text as="label" size="2">
            <Flex gap="2">
              <RadioGroup.Item value="1" /> Simple and Concise
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2">
              <RadioGroup.Item value="2" /> Moderately Detailed
            </Flex>
          </Text>
          <Text as="label" size="2">
            <Flex gap="2">
              <RadioGroup.Item value="3" /> Detailed and Analytical with
              Examples
            </Flex>
          </Text>
        </Flex>
      </RadioGroup.Root>
    </SelectionInputBox>
  );
};

export default FeedbackLevelOption;
