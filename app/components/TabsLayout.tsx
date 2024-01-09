import {
  Box,
  Flex,
  TabsContent,
  TabsList,
  TabsRoot,
  TabsTrigger,
} from "@radix-ui/themes";
import { ReactNode } from "react";

interface Props {
  arr: string[];
  children: ReactNode;
}

const TabsLayout = ({ arr, children }: Props) => {
  return (
    <Flex>
      <TabsRoot defaultValue={arr[0]} className="w-full">
        <TabsList>
          {arr.map((number) => (
            <TabsTrigger value={number} key={number}>
              {number}
            </TabsTrigger>
          ))}
        </TabsList>
        <Box m="3">{children}</Box>
      </TabsRoot>
    </Flex>
  );
};

export default TabsLayout;
