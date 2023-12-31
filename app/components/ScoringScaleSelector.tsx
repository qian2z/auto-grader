import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectRoot,
  SelectTrigger,
} from "@radix-ui/themes";
import { scoring_scales } from "../../index/scales";
import SelectionInputBox from "./SelectionInputBox";

const ScoringScaleSelector = () => {
  return (
    <SelectionInputBox title="Scoring Scale">
      <SelectRoot defaultValue="0 - 9">
        <SelectTrigger />
        <SelectContent>
          <SelectGroup>
            {scoring_scales.map((scale) => (
              <SelectItem key={scale.id} value={scale.scale}>
                {scale.scale}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </SelectRoot>
    </SelectionInputBox>
  );
};

export default ScoringScaleSelector;
