import { z } from "zod";
import { create } from "zustand";
import { submissionSchema } from "./validationSchema";

type SubmissionData = z.infer<typeof submissionSchema>;

interface SubmissionDataStore {
  data: SubmissionData;
  setTitle: (title: string) => void;
  setBody: (body: string) => void;
}

const useSubmissionDataStore = create<SubmissionDataStore>((set) => ({
  data: { title: "Initial Title", body: "Initial Body" },
  setTitle: (title) => set((store) => ({ data: { ...store.data, title } })),
  setBody: (body) => set((store) => ({ data: { ...store.data, body } })),
}));

export default useSubmissionDataStore;

// export interface ResultData {
//   score: string;
//   feedback: string;
// }

// interface ResultDataStore {
//   data: ResultData;
//   setScore: (score: string) => void;
//   setFeedback: (feedback: string) => void;
// }

// const useResultDataStore = create<ResultDataStore>((set) => ({
//   data: { score: "", feedback: "" },
//   setScore: (score) => set((store) => ({ data: { ...store.data, score } })),
//   setFeedback: (feedback) =>
//     set((store) => ({ data: { ...store.data, feedback } })),
// }));

// export default useResultDataStore;
