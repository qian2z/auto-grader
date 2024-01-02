import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface SubmissionsData {
  title: string;
  body: string[];
}

interface SubmissionsDataStore {
  data: SubmissionsData;
  setTitle: (title: string) => void;
  setBody: (body: string[]) => void;
  clearSubmission: () => void;
}

const useSubmissionsDataStore = create<SubmissionsDataStore>()(
  persist(
    (set) => ({
      data: { title: "Initial Title", body: ["Initial Body"] },
      setTitle: (title) => set((store) => ({ data: { ...store.data, title } })),
      setBody: (body) => set((store) => ({ data: { ...store.data, body } })),
      clearSubmission: () =>
        set({ data: { title: "Initial Title", body: ["Initial Body"] } }),
    }),
    { name: "submissions-data" }
  )
);

export default useSubmissionsDataStore;
