"use client";
import { Button, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import { useEffect } from "react";
import { GiClick } from "react-icons/gi";
import useResultsDataStore from "./resultsStore";
import useSubmissionsDataStore from "./submissionsStore";

export default function Home() {
  const clearSubmission = useSubmissionsDataStore((s) => s.clearSubmission);
  const clearResult = useResultsDataStore((s) => s.clearResult);

  useEffect(() => {
    clearResult();
    clearSubmission();
  }, []);

  return (
    <Button>
      <Link href="/get-started">
        <Flex gap="3" justify="center" align="center">
          <Text>Get Started</Text>
          <GiClick />
        </Flex>
      </Link>
    </Button>
  );
}
