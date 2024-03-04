"use client";
import ErrorPageLayout from "@/app/components/ErrorPageLayout";

const InsufficientCreditPage = () => {
  return (
    <ErrorPageLayout
      code="402"
      name="Insufficient Credit"
      description="You don't have enough credit to process the submission."
      extra="Please topup your credit to proceed."
    />
  );
};

export default InsufficientCreditPage;
