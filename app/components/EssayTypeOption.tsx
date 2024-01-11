import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectRoot,
  SelectTrigger,
} from "@radix-ui/themes";
import { useEffect } from "react";
import { essay_types } from "../../index/types";
import SelectionLayout from "./SelectionLayout";

interface Props {
  level: string;
  type: string;
  setType: (value: string) => void;
}

const EssayTypeOption = ({ level, type, setType }: Props) => {
  useEffect(() => {
    if (essay_types[level] !== null) {
      setType(essay_types[level]![0].value);
    }
  }, [level]);

  return (
    <SelectionLayout title="Essay Type">
      <SelectRoot
        defaultValue="Research"
        value={type}
        onValueChange={(value) => setType(value)}
      >
        <SelectTrigger />
        <SelectContent>
          <SelectGroup>
            {essay_types[level]?.map((type) => (
              <SelectItem key={type.label} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </SelectRoot>
    </SelectionLayout>
  );
};

export default EssayTypeOption;
