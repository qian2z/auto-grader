import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import SelectionLayout from "./SelectionLayout";

interface Props {
  wordCount: string;
  setWordCount: (count: string) => void;
}

const MinWordCountInput = ({ wordCount, setWordCount }: Props) => {
  return (
    <SelectionLayout title="Essay Word Count (Min)">
      <NumberInput
        size="sm"
        defaultValue={wordCount}
        min={1}
        onChange={(count) => setWordCount(count)}
        isRequired
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </SelectionLayout>
  );
};

export default MinWordCountInput;
