import useSubmissionDataStore from "@/app/submissionStore";
import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "./api-client";

const scoreService = new APIClient("");

const useScore = () => {
  const submissionData = useSubmissionDataStore((s) => s.data);

  return useQuery<FetchResponse, Error>({
    queryKey: ["score", { submissionData }],
    queryFn: () =>
      scoreService.getScore(submissionData.title, submissionData.body),
  });
};

export default useScore;
