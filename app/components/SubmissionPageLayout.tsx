import { Flex, TextArea } from "@radix-ui/themes";
import axios from "axios";
import { ReactNode } from "react";
import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import { SubmissionForm } from "../single-submission/page";
import GradingOptionsSection from "./GradingOptionsSection";
import SubmissionActionsBox from "./SubmissionActionsBox";

interface Props {
  children: ReactNode;
  register: UseFormRegister<SubmissionForm>;
  handleSubmit: UseFormHandleSubmit<SubmissionForm, undefined>;
}

const SubmissionPageLayout = ({ children, register, handleSubmit }: Props) => {
  const options = {
    headers: {
      Authorization: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    },
  };

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        const res_body = {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: `I would like you to rate an essay. The question for the essay is "${data.title}". The essay that needed to be rated is "${data.body}". Rate the essay quality based on these dimensions: grammar, use of prepositions, word usage, spelling, punctuation, capitalisation, word choice, sentence structure variety, relevance of the content to the prompt, how well the essay is structured, development of ideas with examples, appropriate use of transition phrases, appropriate transitions between ideas, clarity of the thesis and convincingness of the major argument. Each essay is assigned an overall rating of 0 to 9 with half-point rating scale, with 9 being the highest and 0 the lowest. You don't have to explain why you assign that specific score. Just report an overall score only.`,
            },
          ],
        };

        await axios
          .post("https://api.openai.com/v1/chat/completions", res_body, options)
          .then((data) => console.log(data.data.choices[0].message.content));
      })}
    >
      <Flex direction="column" m="5">
        <Flex gap="4" justify="center" align="center">
          <Flex direction="column" gap="3" className="w-4/5">
            <TextArea
              placeholder="Essay Title..."
              className="h-24 font-semibold text-2xl"
              size="3"
              {...register("title")}
            />
            {children}
          </Flex>
          <Flex direction="column" gap="5">
            <GradingOptionsSection />
          </Flex>
        </Flex>
        <Flex justify="end">
          <SubmissionActionsBox href="/results-review" />
        </Flex>
      </Flex>
    </form>
  );
};

export default SubmissionPageLayout;
