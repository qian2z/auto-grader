export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/get-started",
    "/single-submission",
    "/multiple-submissions",
    "results-credit",
    "/results-loading",
    "/results-review",
    "/payment-successful",
  ],
};
