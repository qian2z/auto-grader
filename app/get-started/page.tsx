import { Flex, Separator } from "@radix-ui/themes";
import MultipleSubmissionsDialog from "./MultipleSubmissionsDialog";
import SingleSubmissionDialog from "./SingleSubmissionDialog";

const GetStartedPage = () => {
  return (
    <Flex align="center" justify="center" p="9" m="9">
      <Flex align="center" gap="4">
        <SingleSubmissionDialog />
        <Separator orientation="vertical" size="3" />
        <MultipleSubmissionsDialog />
      </Flex>
    </Flex>
  );
};

export default GetStartedPage;
