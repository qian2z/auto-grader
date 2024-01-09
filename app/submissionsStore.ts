import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface SubmissionsData {
  title: string;
  body: string[];
  name: string[];
  number: string[];
}

interface SubmissionsDataStore {
  data: SubmissionsData;
  setTitle: (title: string) => void;
  setBody: (body: string[]) => void;
  setName: (name: string[]) => void;
  setNumber: (number: string[]) => void;
  clearSubmission: () => void;
}

const useSubmissionsDataStore = create<SubmissionsDataStore>()(
  persist(
    (set) => ({
      data: {
        title: "Initial Title",
        body: ["Initial Body"],
        name: ["Initial Filename"],
        number: ["Initial Number"],
      },
      setTitle: (title) => set((store) => ({ data: { ...store.data, title } })),
      setBody: (body) => set((store) => ({ data: { ...store.data, body } })),
      setName: (name) => set((store) => ({ data: { ...store.data, name } })),
      setNumber: (number) =>
        set((store) => ({ data: { ...store.data, number } })),
      clearSubmission: () =>
        set({
          data: {
            title: "Initial Title",
            body: ["Initial Body"],
            name: ["Initial Filename"],
            number: ["Initial Number"],
          },
        }),
    }),
    { name: "submissions-data" }
  )
);

export default useSubmissionsDataStore;
