export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/get-started",
    "/single-submission",
    "/multiple-submissions",
    "/results-loading",
    "/results-review",
  ],
};
