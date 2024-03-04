"use client";
import PaymentSuccessfulPage from "@/pages/PaymentSuccessfulPage";
import RequestTimeoutErrorPage from "@/pages/RequestTimeoutErrorPage";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const PaymentSuccessful = () => {
  const params = useSearchParams();
  const sessionId = params?.get("sessionId");

  useEffect(() => {
    const fetchSession = async () => {
      try {
        await axios.post("/api/getPayment", JSON.stringify({ id: sessionId }));
      } catch (error) {
        return <RequestTimeoutErrorPage />;
      }
    };
    if (sessionId) {
      fetchSession();
    }
  }, [sessionId]);

  return <PaymentSuccessfulPage />;
};

export default PaymentSuccessful;
