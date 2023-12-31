"use client";
import { TextArea } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import SubmissionPageLayout from "../components/SubmissionPageLayout";

export interface SubmissionForm {
  title: string;
  body: string;
}

const SingleSubmissionPage = () => {
  const { register, handleSubmit } = useForm<SubmissionForm>();

  return (
    <SubmissionPageLayout register={register} handleSubmit={handleSubmit}>
      <TextArea
        placeholder="Essay Body..."
        className="h-96"
        {...register("body")}
      />
    </SubmissionPageLayout>
  );
};

export default SingleSubmissionPage;
