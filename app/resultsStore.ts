import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface ResultsData {
  score: string[];
  feedback: string[];
}

interface ResultsDataStore {
  data: ResultsData;
  setScore: (score: string[]) => void;
  setSpecificScore: (index: number, score: string) => void;
  setFeedback: (feedback: string[]) => void;
  setSpecificFeedback: (index: number, feedback: string) => void;
  clearResult: () => void;
}

const useResultsDataStore = create<ResultsDataStore>()(
  persist(
    (set) => ({
      data: null!,
      setScore: (score) => set((store) => ({ data: { ...store.data, score } })),
      setSpecificScore: (index, newScore) =>
        set((store) => ({
          data: {
            ...store.data,
            score: store.data.score.map((value, i) =>
              i === index ? newScore : value
            ),
          },
        })),
      setFeedback: (feedback) =>
        set((store) => ({ data: { ...store.data, feedback } })),
      setSpecificFeedback: (index, newFeedback) =>
        set((store) => ({
          data: {
            ...store.data,
            feedback: store.data.feedback.map((value, i) =>
              i === index ? newFeedback : value
            ),
          },
        })),
      clearResult: () =>
        set({
          data: null!,
        }),
    }),
    {
      name: "results-data",
    }
  )
);

export default useResultsDataStore;
