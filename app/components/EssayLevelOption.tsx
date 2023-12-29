import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
} from "@radix-ui/themes";
import SelectionInputBox from "./SelectionInputBox";

const EssayLevelOption = ({
  setLevel,
}: {
  setLevel: (value: string) => void;
}) => {
  const essay_levels: { id: number; items: string[]; label?: string }[] = [
    { id: 1, items: ["Primary Level"] },
    { id: 2, items: ["Secondary Level"] },
    { id: 3, items: ["Undergraduate Level"] },
    {
      id: 4,
      label: "IETLS",
      items: [
        "Academic Writing Task 1",
        "Academic Writing Task 2",
        "General Training Writing Task 1",
        "General Training Writing Task 2",
      ],
    },
    {
      id: 5,
      label: "TOEFL",
      items: [
        "Integrated Writing Task",
        "Independent Writing Task",
        "Academic Discussion Task",
      ],
    },
    {
      id: 6,
      label: "GRE",
      items: [
        "Analytical Writing - Issue Task",
        "Analytical Writing - Argument Task",
      ],
    },
  ];

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
