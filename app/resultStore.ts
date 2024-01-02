import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface ResultData {
  score: string;
  feedback: string;
}

interface ResultDataStore {
  data: ResultData;
  setScore: (score: string) => void;
  setFeedback: (feedback: string) => void;
  clearResult: () => void;
}

const useResultDataStore = create<ResultDataStore>()(
  persist(
    (set) => ({
      data: { score: "Initial Score", feedback: "Initial Feedback" },
      setScore: (score) => set((store) => ({ data: { ...store.data, score } })),
      setFeedback: (feedback) =>
        set((store) => ({ data: { ...store.data, feedback } })),
      clearResult: () =>
        set({ data: { score: "Initial Score", feedback: "Initial Feedback" } }),
    }),
    { name: "result-data" }
  )
);

export default useResultDataStore;
