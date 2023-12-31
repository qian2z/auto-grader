import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "./api-client";

const scoreService = new APIClient("");

const useScore = (title: string, body: string) => {
  return useQuery<FetchResponse, Error>({
    queryKey: ["results", { title, body }],
    queryFn: () => scoreService.getScore(title, body),
  });
};

export default useScore;
