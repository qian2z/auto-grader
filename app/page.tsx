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
    <div className="bg-white">
      <div className="relative isolate px-6 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        <div className="mx-auto max-w-2xl py-20">
          <div className="text-center w-full">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900">
              Master the Art of Expression with Intelligent Essay Grading
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Experience the future of education with automated grading that's
              accurate, insightful, and tailored to each student's unique
              journey.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="3">
                <Link href="/get-started">
                  <Flex gap="3" justify="center" align="center">
                    <Text>Get Started</Text>
                    <GiClick />
                  </Flex>
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
        </div>
      </div>
    </div>
  );
}
