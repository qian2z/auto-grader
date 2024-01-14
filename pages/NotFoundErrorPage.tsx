"use client";
import ErrorPageLayout from "@/app/components/ErrorPageLayout";

const NotFoundErrorPage = () => {
  return (
    <ErrorPageLayout
      code="404"
      name="Page Not Found"
      description="Sorry, the page you are looking for could not be found."
    />
  );
};

export default NotFoundErrorPage;
