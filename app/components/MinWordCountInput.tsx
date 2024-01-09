import { TextField, TextFieldInput, TextFieldRoot } from "@radix-ui/themes";
import SelectionLayout from "./SelectionLayout";

const MinWordCountInput = () => {
  return (
    <SelectionLayout title="Essay Word Count (Min)">
      <TextFieldRoot>
        <TextFieldInput placeholder="150 | 250 | 500 | etc"></TextFieldInput>
      </TextFieldRoot>
    </SelectionLayout>
  );
};

export default MinWordCountInput;
