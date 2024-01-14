"use client";
import ErrorPageLayout from "@/app/components/ErrorPageLayout";

const BadRequestErrorPage = () => {
  return (
    <ErrorPageLayout
      code="400"
      name="Bad Request"
      description="You haven't submitted any essay yet!"
      extra="Please try again by
      submitting an essay."
    />
  );
};

export default BadRequestErrorPage;
