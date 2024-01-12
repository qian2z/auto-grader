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
      data: { score: ["Initial Score"], feedback: ["Initial Feedback"] },
      setScore: (score) => set((store) => ({ data: { ...store.data, score } })),
      setFeedback: (feedback) =>
        set((store) => ({ data: { ...store.data, feedback } })),
      clearResult: () =>
        set({
          data: { score: ["Initial Score"], feedback: ["Initial Feedback"] },
        }),
    }),
    {
      name: "results-data",
    }
  )
);

export default useResultsDataStore;
