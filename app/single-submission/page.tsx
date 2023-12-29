import { TextArea } from "@radix-ui/themes";
import SubmissionPageLayout from "../components/SubmissionPageLayout";

const SingleSubmissionPage = () => {
  return (
    <SubmissionPageLayout>
      <TextArea placeholder="Essay Body..." className="h-96" />
    </SubmissionPageLayout>
  );
};

export default SingleSubmissionPage;
