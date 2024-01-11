import { Options } from "@/app/submissionsStore";
import axios from "axios";

interface Choice {
  message: {
    content: string;
  };
}

export interface FetchResponse {
  choices: Choice[];
}

const axiosScoreInstance = axios.create({
  baseURL: "https://api.openai.com/v1/chat/completions",
  headers: {
    Authorization: process.env.NEXT_PUBLIC_SCORE_OPENAI_API_KEY,
  },
});

const axiosFeedbackInstance = axios.create({
  baseURL: "https://api.openai.com/v1/chat/completions",
  headers: {
    Authorization: process.env.NEXT_PUBLIC_FEEDBACK_OPENAI_API_KEY,
  },
});

class APIClient {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getScore = (title: string, body: string, options: Options) => {
    const res_body = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `I would like you to rate an essay. The question for the essay is "${title}". The essay that needed to be rated is "${body}". This essay follows the format of the ${options.level} essay, specifically a/an ${options.type} essay, with a minimum word count requirement of ${options.wordCount} words. Rate the essay quality based on these dimensions: grammar, use of prepositions, word usage, spelling, punctuation, capitalisation, word choice, sentence structure variety, relevance of the content to the prompt, how well the essay is structured, development of ideas with examples, appropriate use of transition phrases, appropriate transitions between ideas, clarity of the thesis and convincingness of the major argument. Each essay is assigned an overall rating of 0 to ${options.scale} with ${options.point}-point rating scale, with ${options.scale} being the highest and 0 the lowest. You don't have to explain why you assign that specific score. Just report an overall score only.`,
        },
      ],
    };
    return axiosScoreInstance
      .post<FetchResponse>(this.endpoint, res_body)
      .then((res) => res.data);
  };

  getFeedback = (title: string, body: string, options: Options) => {
    var feedback = `Pretend you are an IELTS marker. The provided essay question is "${title}". The essay that requires evaluation is "${body}". This essay follows the format of the ${options.level} essay, specifically a/an ${options.type} essay, with a minimum word count requirement of ${options.wordCount} words. I would like you to give overall feedback on an essay based on the following marking rubrics: evaluate whether the essay effectively addresses the provided question, consider the flow of the essay, assess how well the ideas connect and progress logically, examine the strength of the vocabulary to determine if it's appropriate or accurate and varied, examine the use of different sentence structures and examine the essay is free from grammatical errors. Additionally, you may take into account the word count requirement for the essay. Provide brief and straightforward — similar to human feedback. Use general terms that are easily understandable by students. Ensure that the feedback does not exceed half the length of the provided essay and is presented in a single paragraph. You are not required to evaluate your feedback by offering examples.`;
    if (options.detail === "moderate")
      feedback = `Pretend you are an IELTS marker. The provided essay question is "${title}". The essay that requires evaluation is "${body}". This essay follows the format of the ${options.level} essay, specifically a/an ${options.type} essay, with a minimum word count requirement of ${options.wordCount} words. I would like you to give overall feedback on an essay based on the following marking rubrics: evaluate whether the essay effectively addresses the provided question, consider the flow of the essay, assess how well the ideas connect and progress logically, examine the strength of the vocabulary to determine if it’s appropriate or accurate and varied, examine the use of different sentence structures and examine the essay is free from grammatical errors. Additionally, you may take into account the word count requirement for the essay. Ensure that your feedback is moderately detailed, concise, and precise — similar to human feedback. Use general terms that are easily understandable by students. While you can offer suggestions for essay improvement, there is no need to evaluate your suggestions by providing examples. Keep the feedback within the length of the provided essay and present it in one paragraph.`;
    if (options.detail === "detailed")
      feedback = `Pretend you are an IELTS marker. The provided essay question is "${title}". The essay that requires evaluation is "${body}". This essay follows the format of the ${options.level} essay, specifically a/an ${options.type} essay, with a minimum word count requirement of ${options.wordCount} words. I would like you to give overall feedback on an essay based on the following marking rubrics: evaluate whether the essay effectively addresses the provided question, consider the flow of the essay, assess how well the ideas connect and progress logically, examine the strength of the vocabulary to determine if it’s appropriate or accurate and varied, examine the use of different sentence structures and examine the essay is free from grammatical errors. Additionally, you may take into account the word count requirement for the essay. Ensure that your feedback is detailed, concise, and precise — similar to human feedback. Use general terms that are easily understandable by students. Provide constructive suggestions for essay improvement and evaluate your suggestions by offering examples. Keep the feedback within the length of the provided essay and present it in one paragraph.`;

    const res_body = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: feedback,
        },
      ],
    };
    return axiosFeedbackInstance
      .post<FetchResponse>(this.endpoint, res_body)
      .then((res) => res.data);
  };
}

export default APIClient;
