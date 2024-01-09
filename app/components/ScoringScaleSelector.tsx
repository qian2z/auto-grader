import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectRoot,
  SelectTrigger,
} from "@radix-ui/themes";
import { scoring_scales } from "../../index/scales";
import SelectionLayout from "./SelectionLayout";

const ScoringScaleSelector = () => {
  return (
    <SelectionLayout title="Scoring Scale">
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
    </SelectionLayout>
  );
};

export default ScoringScaleSelector;
