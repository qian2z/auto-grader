import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";

const scoreService = new APIClient("");

const useFeedback = (title: string, body: string) => {
  return useQuery<FetchResponse, Error>({
    queryKey: ["feedback", { title, body }],
    queryFn: () => scoreService.getFeedback(title, body),
  });
};

export default useFeedback;
