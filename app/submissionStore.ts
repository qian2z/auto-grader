import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface SubmissionData {
  title: string;
  body: string;
}

interface SubmissionDataStore {
  data: SubmissionData;
  setTitle: (title: string) => void;
  setBody: (body: string) => void;
  clearSubmission: () => void;
}

const useSubmissionDataStore = create<SubmissionDataStore>()(
  persist(
    (set) => ({
      data: { title: "Initial Title", body: "Initial Body" },
      setTitle: (title) => set((store) => ({ data: { ...store.data, title } })),
      setBody: (body) => set((store) => ({ data: { ...store.data, body } })),
      clearSubmission: () =>
        set({ data: { title: "Initial Title", body: "Initial Body" } }),
    }),
    { name: "submission-data" }
  )
);

export default useSubmissionDataStore;
