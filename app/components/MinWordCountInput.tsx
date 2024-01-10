import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import SelectionLayout from "./SelectionLayout";

const MinWordCountInput = () => {
  return (
    <SelectionLayout title="Essay Word Count (Min)">
      <NumberInput size="sm" defaultValue={250} min={1}>
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
