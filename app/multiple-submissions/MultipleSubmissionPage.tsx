"use client";
import {
  Box,
  Flex,
  TabsContent,
  TabsList,
  TabsRoot,
  TabsTrigger,
  Text,
  TextArea,
} from "@radix-ui/themes";
import { useEffect, useState } from "react";
import GradingOptionsSection from "../components/GradingOptionsSection";
import SubmissionActionsBox from "../components/SubmissionActionsBox";
import useSubmissionsDataStore from "../submissionsStore";

export const MultipleSubmissionPage = () => {
  const [multipleBody, setMultipleBody] = useState<string[]>([]);
  const [multipleName, setMultipleName] = useState<string[]>([]);
  const storedMultipleBody = useSubmissionsDataStore((s) => s.data.body);
  const storedFilename = useSubmissionsDataStore((s) => s.data.name);

  useEffect(() => {
    setMultipleBody(storedMultipleBody);
    setMultipleName(storedFilename);
  }, []);

  if (multipleName[0] === undefined) return null;

  return (
    <Flex direction="column" m="5">
      <Flex gap="4" justify="center" align="center">
        <Flex direction="column" gap="3" className="w-4/5">
          <TextArea
            placeholder="Essay Title..."
            className="h-24 font-semibold text-2xl"
            size="3"
          />
          <Flex>
            <TabsRoot defaultValue={multipleName[0]}>
              <TabsList>
                {multipleName.map((name) => (
                  <TabsTrigger value={name} key={name}>
                    {name}
                  </TabsTrigger>
                ))}
              </TabsList>
              <Box m="3">
                {multipleName.map((name, index) => (
                  <TabsContent value={name} key={name}>
                    <Text size="3">{multipleBody[index]}</Text>
                  </TabsContent>
                ))}
              </Box>
            </TabsRoot>
          </Flex>
        </Flex>
        <Flex direction="column" gap="5">
          <GradingOptionsSection />
        </Flex>
      </Flex>
      <Flex justify="end">
        <SubmissionActionsBox />
      </Flex>
    </Flex>
  );
};
