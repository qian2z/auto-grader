import { SubmissionsData } from "@/app/submissionsStore";
import { useQueries } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const scoreService = new APIClient("");

const useScores = (data: SubmissionsData) => {
  const title = data.title;
  const options = data.options;
  const queries = data.bodies.map((body) => {
    return {
      queryKey: ["score", { title, body }],
      queryFn: () => scoreService.getScore(title, body, options),
    };
  });

  return useQueries({ queries });
};

export default useScores;
