"use client";
import RequestTimeoutErrorPage from "@/pages/RequestTimeoutErrorPage";
import axios from "axios";
import { useEffect } from "react";

const PaymentSuccessful = () => {
  const params = new URLSearchParams(window.location.search);
  const sessionId = params.get("sessionId");

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const response = await axios.post(
          "/api/getPayment",
          JSON.stringify({ id: sessionId })
        );
      } catch (error) {
        return <RequestTimeoutErrorPage />;
      }
    };
    console.log(sessionId);
    if (sessionId) {
      fetchSession();
    }
  }, [sessionId]);

  return <div>PaymentSuccessful</div>;
};

export default PaymentSuccessful;
