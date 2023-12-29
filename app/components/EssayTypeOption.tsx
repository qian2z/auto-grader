import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectRoot,
  SelectTrigger,
} from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { types } from "../index/types";
import SelectionInputBox from "./SelectionInputBox";

const EssayTypeOption = ({ level }: { level: string }) => {
  const [selectedType, setSelectedType] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    if (types[level] !== null) {
      setSelectedType(types[level]![0]);
    }
  }, [level]);

  if (types[level] === null) return null;

  return (
    <SelectionInputBox title="Essay Type">
      <SelectRoot
        value={selectedType}
        onValueChange={(value) => setSelectedType(value)}
      >
        <SelectTrigger />
        <SelectContent>
          <SelectGroup>
            {types[level]?.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </SelectRoot>
    </SelectionInputBox>
  );
};

export default EssayTypeOption;
