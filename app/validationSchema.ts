import { z } from "zod";

export const submissionSchema = z.object({
  title: z.string().min(1, "Essay Title is Required."),
  body: z.string().min(1, "Essay Body is Required."),
});
