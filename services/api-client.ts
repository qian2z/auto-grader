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

  getScore = (title: string, body: string) => {
    const res_body = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `I would like you to rate an essay. The question for the essay is "${title}". The essay that needed to be rated is "${body}". Rate the essay quality based on these dimensions: grammar, use of prepositions, word usage, spelling, punctuation, capitalisation, word choice, sentence structure variety, relevance of the content to the prompt, how well the essay is structured, development of ideas with examples, appropriate use of transition phrases, appropriate transitions between ideas, clarity of the thesis and convincingness of the major argument. Each essay is assigned an overall rating of 0 to 9 with half-point rating scale, with 9 being the highest and 0 the lowest. You don't have to explain why you assign that specific score. Just report an overall score only.`,
        },
      ],
    };
    return axiosScoreInstance
      .post<FetchResponse>(this.endpoint, res_body)
      .then((res) => res.data);
  };

  getFeedback = (title: string, body: string) => {
    const res_body = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `Pretend you are an IELTS marker. I would like you to give overall feedback on an essay based on the following marking rubrics: evaluate whether the essay effectively addresses the provided question, consider the flow of the essay, assess how well the ideas connect and progress logically, examine the strength of the vocabulary to determine if it's appropriate and varied, examine the use of different sentence structures and examine the essay is free from grammatical errors. Keep the feedback short and simple, more like human feedback, keep the feedback no longer than half the length of the essay provided and in one paragraph. You do not need to evaluate your feedback by giving examples. The question for the essay is "${title}". The essay that needed to be given feedback is "${body}".`,
        },
      ],
    };
    return axiosFeedbackInstance
      .post<FetchResponse>(this.endpoint, res_body)
      .then((res) => res.data);
  };
}

export default APIClient;
