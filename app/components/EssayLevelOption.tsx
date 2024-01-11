import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
} from "@radix-ui/themes";
import { essay_levels } from "../../index/levels";
import SelectionLayout from "./SelectionLayout";

interface Props {
  level: string;
  setLevel: (value: string) => void;
}

const EssayLevelOption = ({ level, setLevel }: Props) => {
  return (
    <SelectionLayout title="Essay Level">
      <SelectRoot
        defaultValue={level}
        onValueChange={(value) => setLevel(value)}
      >
        <SelectTrigger />
        <SelectContent>
          {essay_levels.map((level) => (
            <SelectGroup key={level.id}>
              {level.label && <SelectLabel>{level?.label}</SelectLabel>}
              {level.items.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          ))}
        </SelectContent>
      </SelectRoot>
    </SelectionLayout>
  );
};

export default EssayLevelOption;
