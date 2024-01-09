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
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useRef, useState } from "react";
import GradingOptionsSection from "../components/GradingOptionsSection";
import SubmissionActionsBox from "../components/SubmissionActionsBox";
import useSubmissionsDataStore from "../submissionsStore";

const MultipleSubmissionPage = () => {
  const router = useRouter();

  const titleRef = useRef<HTMLTextAreaElement>(null);
  const [multipleBody, setMultipleBody] = useState<string[]>([]);
  const [multipleName, setMultipleName] = useState<string[]>([]);
  const setEssayTitle = useSubmissionsDataStore((s) => s.setTitle);
  const storedMultipleBody = useSubmissionsDataStore((s) => s.data.body);
  const storedFilename = useSubmissionsDataStore((s) => s.data.name);

  useEffect(() => {
    setMultipleBody(storedMultipleBody);
    setMultipleName(storedFilename);
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (titleRef.current) {
      setEssayTitle(titleRef.current.value);
      router.push("/results-loading");
    }
  };

  if (multipleName[0] === undefined) return null;

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" m="5">
        <Flex gap="6" justify="center" align="start">
          <Flex direction="column" gap="3" className="w-4/5">
            <TextArea
              ref={titleRef}
              placeholder="Essay Title..."
              className="h-24 font-semibold text-2xl"
              size="3"
            />
            <Flex>
              <TabsRoot defaultValue={multipleName[0]} className="w-full">
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
                      <Box>
                        <Text size="3">{multipleBody[index]}</Text>
                      </Box>
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
    </form>
  );
};

export default MultipleSubmissionPage;
