import { Flex, RadioGroup, Text } from "@radix-ui/themes";
import SelectionLayout from "./SelectionLayout";

const FeedbackLevelOption = () => {
  return (
    <SelectionLayout title="Feedback Detail Level">
      <RadioGroup.Root defaultValue="1">
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
    </SelectionLayout>
  );
};

export default FeedbackLevelOption;
