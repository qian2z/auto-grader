import { SubmissionsData } from "@/app/submissionsStore";
import { useQueries } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const scoreService = new APIClient("");

const useFeedbacks = (data: SubmissionsData) => {
  const title = data.title;
  const options = data.options;
  const queries = data.bodies.map((body) => {
    return {
      queryKey: ["feedback", { title, body }],
      queryFn: () => scoreService.getFeedback(title, body, options),
    };
  });
  return useQueries({ queries });
};

export default useFeedbacks;
