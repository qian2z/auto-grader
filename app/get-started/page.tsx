import { Card, Flex, Separator } from "@radix-ui/themes";
import SingleSubmissionDialog from "./SingleSubmissionDialog";

const GetStartedPage = () => {
  return (
    <Flex align="center" gap="4" className="h-60">
      <SingleSubmissionDialog />
      <Separator orientation="vertical" size="3" />
      <Card>Multiple Submissions</Card>
    </Flex>
  );
};

export default GetStartedPage;
