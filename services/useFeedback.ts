import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "./api-client";

const feedbackService = new APIClient("");

const useFeedback = (title: string, body: string) => {
  return useQuery<FetchResponse, Error>({
    queryKey: ["feedback", { title, body }],
    queryFn: () => feedbackService.getFeedback(title, body),
  });
};

export default useFeedback;
