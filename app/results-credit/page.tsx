"use client";
import InsufficientCreditPage from "@/pages/InsufficientCreditPage";
import RequestTimeoutErrorPage from "@/pages/RequestTimeoutErrorPage";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ResultSkeleton from "../components/ResultSkeleton";
import useSubmissionsDataStore from "../submissionsStore";

const ResultCreditPage = () => {
  const router = useRouter();
  const [status, setStatus] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const storedData = useSubmissionsDataStore((s) => s.data.bodies);

  useEffect(() => {
    const fetchCredit = async () => {
      try {
        const response = await axios.patch(
          "/api/credit",
          JSON.stringify({ number: storedData.length })
        );
        setStatus(response.status);
      } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          setStatus(axiosError.response.status);
        } else {
          console.error("Network Error:", axiosError.message);
          setStatus(500);
        }
      }
    };
    fetchCredit();
    setIsLoading(false);
  }, [router]);

  if (isLoading) return <ResultSkeleton />;

  if (status === 402) return <InsufficientCreditPage />;
  else if (status === 200) router.push("/results-loading");
  else return <RequestTimeoutErrorPage />;

  return <ResultSkeleton />;
};

export default ResultCreditPage;
