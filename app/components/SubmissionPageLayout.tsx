import { Flex, TextArea } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { ReactNode, useRef } from "react";
import useSubmissionDataStore from "../store";
import GradingOptionsSection from "./GradingOptionsSection";
import SubmissionActionsBox from "./SubmissionActionsBox";

const SubmissionPageLayout = ({ children }: { children: ReactNode }) => {
  const searchRef = useRef<HTMLTextAreaElement>(null);
  const setEssayTitle = useSubmissionDataStore((s) => s.setTitle);
  const router = useRouter();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (searchRef.current) {
          setEssayTitle(searchRef.current.value);
          router.push("/results-review");
        }
      }}
    >
      <Flex direction="column" m="5">
        <Flex gap="4" justify="center" align="center">
          <Flex direction="column" gap="3" className="w-4/5">
            <TextArea
              ref={searchRef}
              placeholder="Essay Title..."
              className="h-24 font-semibold text-2xl"
              size="3"
            />
            {children}
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

export default SubmissionPageLayout;
