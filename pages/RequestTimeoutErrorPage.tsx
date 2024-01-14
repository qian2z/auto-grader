"use client";
import ErrorPageLayout from "@/app/components/ErrorPageLayout";

const RequestTimeoutErrorPage = () => {
  return (
    <ErrorPageLayout
      code="408"
      name="Request Timeout"
      description="Something went wrong. Please try again."
    />
  );
};

export default RequestTimeoutErrorPage;
