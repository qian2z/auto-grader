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
  data: { title: "", body: "" },
  setTitle: (title) => set((store) => ({ data: { ...store.data, title } })),
  setBody: (body) => set((store) => ({ data: { ...store.data, body } })),
}));

export default useSubmissionDataStore;
