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

class APIClient {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getScore = (title: string, body: string, options: Options) => {
    return axios.post("/api/score/", JSON.stringify({ title, body, options }));
  };

  getFeedback = (title: string, body: string, options: Options) => {
    return axios.post(
      "/api/feedback/",
      JSON.stringify({ title, body, options })
    );
  };
}

export default APIClient;
