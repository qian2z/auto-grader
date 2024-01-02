import useSubmissionDataStore from "@/app/submissionStore";
import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "./api-client";

const scoreService = new APIClient("");

const useFeedback = () => {
  const submissionData = useSubmissionDataStore((s) => s.data);

  return useQuery<FetchResponse, Error>({
    queryKey: ["feedback", { submissionData }],
    queryFn: () =>
      scoreService.getFeedback(submissionData.title, submissionData.body),
  });
};

export default useFeedback;
