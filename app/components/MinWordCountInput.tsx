import { TextField, TextFieldInput, TextFieldRoot } from "@radix-ui/themes";
import SelectionInputBox from "./SelectionInputBox";

const MinWordCountInput = () => {
  return (
    <SelectionInputBox title="Essay Word Count (Min)">
      <TextFieldRoot>
        <TextFieldInput placeholder="150 | 250 | 500 | etc"></TextFieldInput>
      </TextFieldRoot>
    </SelectionInputBox>
  );
};

export default MinWordCountInput;
