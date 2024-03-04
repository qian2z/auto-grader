"use client";
import ErrorPageLayout from "@/app/components/ErrorPageLayout";

const PaymentSuccessfulPage = () => {
  return (
    <ErrorPageLayout
      code="200"
      name="Payment Successful"
      description="Please proceed to submit your essay now."
      extra="Thank you for your payment!"
    />
  );
};

export default PaymentSuccessfulPage;
