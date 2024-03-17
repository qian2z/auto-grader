import authOptions from "@/app/auth/authOptions";
import { FetchResponse } from "@/services/api-client";
import axios from "axios";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });

  const data = await request.json();

  const axiosScoreInstance = axios.create({
    baseURL: "https://api.openai.com/v1/chat/completions",
    headers: {
      Authorization: process.env.NEXT_PUBLIC_SCORE_OPENAI_API_KEY,
    },
  });

  const res_body = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: `I would like you to rate an essay. The question for the essay is "${data.title}". The essay that needed to be rated is "${data.body}". Rate the essay quality based on these dimensions: grammar, use of prepositions, word usage, spelling, punctuation, capitalisation, word choice, sentence structure variety, relevance of the content to the prompt, how well the essay is structured, development of ideas with examples, appropriate use of transition phrases, appropriate transitions between ideas, clarity of the thesis and convincingness of the major argument. Each essay is assigned an overall rating of 0 to ${data.options.scale} with ${data.options.point}-point rating scale, with ${data.options.scale} being the highest and 0 the lowest. You don't have to explain why you assign that specific score. Just report an overall score only.`,
      },
    ],
  };

  try {
    const result = await axiosScoreInstance.post<FetchResponse>("", res_body);
    return NextResponse.json(result.data, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
