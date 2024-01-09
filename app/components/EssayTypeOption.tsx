import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectRoot,
  SelectTrigger,
} from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { essay_types } from "../../index/types";
import SelectionLayout from "./SelectionLayout";

const EssayTypeOption = ({ level }: { level: string }) => {
  const [selectedType, setSelectedType] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    if (essay_types[level] !== null) {
      setSelectedType(essay_types[level]![0]);
    }
  }, [level]);

  if (essay_types[level] === null) return null;

  return (
    <SelectionLayout title="Essay Type">
      <SelectRoot
        defaultValue="Research"
        value={selectedType}
        onValueChange={(value) => setSelectedType(value)}
      >
        <SelectTrigger />
        <SelectContent>
          <SelectGroup>
            {essay_types[level]?.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </SelectRoot>
    </SelectionLayout>
  );
};

export default EssayTypeOption;
