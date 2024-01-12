import { Callout, Flex, Strong } from "@radix-ui/themes";
import { CiCircleInfo } from "react-icons/ci";

const UnsavedCallout = () => {
  return (
    <Flex mb="2">
      <Callout.Root color="red" size="1">
        <Callout.Icon>
          <CiCircleInfo />
        </Callout.Icon>
        <Callout.Text size="3">
          Leaving this page will <Strong>discard</Strong> the results data.
          Please <Strong>download the results</Strong> before leaving.
        </Callout.Text>
      </Callout.Root>
    </Flex>
  );
};

export default UnsavedCallout;
