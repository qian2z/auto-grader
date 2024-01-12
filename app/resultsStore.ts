import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface ResultsData {
  score: string[];
  feedback: string[];
}

interface ResultsDataStore {
  data: ResultsData;
  setScore: (score: string[]) => void;
  setFeedback: (feedback: string[]) => void;
  clearResult: () => void;
}

const useResultsDataStore = create<ResultsDataStore>()(
  persist(
    (set) => ({
      data: null!,
      setScore: (score) => set((store) => ({ data: { ...store.data, score } })),
      setFeedback: (feedback) =>
        set((store) => ({ data: { ...store.data, feedback } })),
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
