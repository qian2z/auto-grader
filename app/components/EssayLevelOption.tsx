import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
} from "@radix-ui/themes";
import { essay_levels } from "../index/levels";
import SelectionInputBox from "./SelectionInputBox";

const EssayLevelOption = ({
  setLevel,
}: {
  setLevel: (value: string) => void;
}) => {
  return (
    <SelectionInputBox title="Essay Level">
      <SelectRoot
        defaultValue="Undergraduate Level"
        onValueChange={(value) => setLevel(value)}
      >
        <SelectTrigger />
        <SelectContent>
          {essay_levels.map((level) => (
            <SelectGroup key={level.id}>
              {level.label && <SelectLabel>{level?.label}</SelectLabel>}
              {level.items.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectGroup>
          ))}
        </SelectContent>
      </SelectRoot>
    </SelectionInputBox>
  );
};

export default EssayLevelOption;
