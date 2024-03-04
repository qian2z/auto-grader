import authOptions from "@/app/auth/authOptions";
import { FetchResponse } from "@/services/api-client";
import axios from "axios";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });

  const data = await request.json();

  const axiosFeedbackInstance = axios.create({
    baseURL: "https://api.openai.com/v1/chat/completions",
    headers: {
      Authorization: process.env.NEXT_PUBLIC_FEEDBACK_OPENAI_API_KEY,
    },
  });

  var feedback = `Pretend you are an IELTS marker. The provided essay question is "${data.title}". The essay that requires evaluation is "${data.body}". This essay follows the format of the ${data.options.level} essay, specifically a/an ${data.options.type} essay, with a minimum word count requirement of ${data.options.wordCount} words. I would like you to give overall feedback on an essay based on the following marking rubrics: evaluate whether the essay effectively addresses the provided question, consider the flow of the essay, assess how well the ideas connect and progress logically, examine the strength of the vocabulary to determine if it's appropriate or accurate and varied, examine the use of different sentence structures and examine the essay is free from grammatical errors. Additionally, you may take into account the word count requirement for the essay. Provide brief and straightforward — similar to human feedback. Use general terms that are easily understandable by students. Ensure that the feedback does not exceed half the length of the provided essay and is presented in a single paragraph. You are not required to evaluate your feedback by offering examples.`;
  if (data.options.detail === "moderate")
    feedback = `Pretend you are an IELTS marker. The provided essay question is "${data.title}". The essay that requires evaluation is "${data.body}". This essay follows the format of the ${data.options.level} essay, specifically a/an ${data.options.type} essay, with a minimum word count requirement of ${data.options.wordCount} words. I would like you to give overall feedback on an essay based on the following marking rubrics: evaluate whether the essay effectively addresses the provided question, consider the flow of the essay, assess how well the ideas connect and progress logically, examine the strength of the vocabulary to determine if it's appropriate or accurate and varied, examine the use of different sentence structures and examine the essay is free from grammatical errors. Additionally, you may take into account the word count requirement for the essay. Ensure that your feedback is moderately detailed, concise, and precise — similar to human feedback. Use general terms that are easily understandable by students. While you can offer suggestions for essay improvement, there is no need to evaluate your suggestions by providing examples. Keep the feedback within the length of the provided essay and present it in one paragraph.`;
  if (data.options.detail === "detailed")
    feedback = `Pretend you are an IELTS marker. The provided essay question is "${data.title}". The essay that requires evaluation is "${data.body}". This essay follows the format of the ${data.options.level} essay, specifically a/an ${data.options.type} essay, with a minimum word count requirement of ${data.options.wordCount} words. I would like you to give overall feedback on an essay based on the following marking rubrics: evaluate whether the essay effectively addresses the provided question, consider the flow of the essay, assess how well the ideas connect and progress logically, examine the strength of the vocabulary to determine if it's appropriate or accurate and varied, examine the use of different sentence structures and examine the essay is free from grammatical errors. Additionally, you may take into account the word count requirement for the essay. Ensure that your feedback is detailed, concise, and precise — similar to human feedback. Use general terms that are easily understandable by students. Provide constructive suggestions for essay improvement and evaluate your suggestions by offering examples. Keep the feedback within the length of the provided essay and present it in one paragraph.`;

  const res_body = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: feedback,
      },
    ],
  };

  try {
    const result = await axiosFeedbackInstance.post<FetchResponse>(
      "",
      res_body
    );
    return NextResponse.json(result.data, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
