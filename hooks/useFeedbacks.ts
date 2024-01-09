import { useQueries } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const scoreService = new APIClient("");

const useFeedbacks = (title: string, bodies: string[]) => {
  const queries = bodies.map((body) => {
    return {
      queryKey: ["feedback", { title, body }],
      queryFn: () => scoreService.getFeedback(title, body),
    };
  });
  return useQueries({ queries });
};

export default useFeedbacks;
