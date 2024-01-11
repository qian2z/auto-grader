import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Options {
  level: string;
  type: string;
  scale: string;
  wordCount: string;
  detail: string;
  point: "half" | "one";
}
export interface SubmissionsData {
  title: string;
  bodies: string[];
  names: string[];
  numbers: string[];
  options: Options;
}

interface SubmissionsDataStore {
  data: SubmissionsData;
  setTitle: (title: string) => void;
  setBodies: (bodies: string[]) => void;
  setNames: (names: string[]) => void;
  setNumbers: (numbers: string[]) => void;
  setOptions: (options: Options) => void;
  clearSubmission: () => void;
}

const useSubmissionsDataStore = create<SubmissionsDataStore>()(
  persist(
    (set) => ({
      data: {
        title: "Initial Title",
        bodies: ["Initial Body"],
        names: ["Initial Filename"],
        numbers: ["Initial Number"],
        options: {
          level: "Undergraduate Level",
          type: "Research",
          scale: "9",
          wordCount: "250",
          detail: "Simple and Concise",
          point: "half",
        },
      },
      setTitle: (title) => set((store) => ({ data: { ...store.data, title } })),
      setBodies: (bodies) =>
        set((store) => ({ data: { ...store.data, bodies: bodies } })),
      setNames: (names) =>
        set((store) => ({ data: { ...store.data, names: names } })),
      setNumbers: (numbers) =>
        set((store) => ({ data: { ...store.data, numbers: numbers } })),
      setOptions: (options) =>
        set((store) => ({ data: { ...store.data, options } })),
      clearSubmission: () =>
        set({
          data: {
            title: "Initial Title",
            bodies: ["Initial Body"],
            names: ["Initial Filename"],
            numbers: ["Initial Number"],
            options: {
              level: "Undergraduate Level",
              type: "Research",
              scale: "9",
              wordCount: "250",
              detail: "Simple and Concise",
              point: "half",
            },
          },
        }),
    }),
    { name: "submissions-data" }
  )
);

export default useSubmissionsDataStore;
