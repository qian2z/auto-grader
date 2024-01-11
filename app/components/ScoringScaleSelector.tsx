import { getPointByValue } from "@/utils/findPoint";
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectRoot,
  SelectTrigger,
} from "@radix-ui/themes";
import { scoring_scales } from "../../index/scales";
import SelectionLayout from "./SelectionLayout";

interface Props {
  scale: string;
  setScale: (scale: string) => void;
  setPoint: (point: "half" | "one") => void;
}

const ScoringScaleSelector = ({ scale, setScale, setPoint }: Props) => {
  return (
    <SelectionLayout title="Scoring Scale">
      <SelectRoot
        defaultValue={scale}
        onValueChange={(scale) => {
          setScale(scale);
          const point = getPointByValue(scale);
          setPoint(point);
        }}
      >
        <SelectTrigger />
        <SelectContent>
          <SelectGroup>
            {scoring_scales.map((scale) => (
              <SelectItem key={scale.id} value={scale.value}>
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
