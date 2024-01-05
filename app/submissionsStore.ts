import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface SubmissionsData {
  title: string;
  body: string[];
  name: string[];
}

interface SubmissionsDataStore {
  data: SubmissionsData;
  setTitle: (title: string) => void;
  setBody: (body: string[]) => void;
  setName: (name: string[]) => void;
  clearSubmission: () => void;
}

const useSubmissionsDataStore = create<SubmissionsDataStore>()(
  persist(
    (set) => ({
      data: {
        title: "Initial Title",
        body: ["Initial Body"],
        name: ["Initial Filename"],
      },
      setTitle: (title) => set((store) => ({ data: { ...store.data, title } })),
      setBody: (body) => set((store) => ({ data: { ...store.data, body } })),
      setName: (name) => set((store) => ({ data: { ...store.data, name } })),
      clearSubmission: () =>
        set({
          data: {
            title: "Initial Title",
            body: ["Initial Body"],
            name: ["Initial Filename"],
          },
        }),
    }),
    { name: "submissions-data" }
  )
);

export default useSubmissionsDataStore;
