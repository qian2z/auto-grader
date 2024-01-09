import { useQueries } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const scoreService = new APIClient("");

const useScores = (title: string, bodies: string[]) => {
  const queries = bodies.map((body) => {
    return {
      queryKey: ["score", { title, body }],
      queryFn: () => scoreService.getScore(title, body),
    };
  });

  return useQueries({ queries });
};

export default useScores;
