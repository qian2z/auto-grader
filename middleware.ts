export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/single-submission",
    "/multiple-submissions",
    "/results-loading",
    "/results-review",
  ],
};
