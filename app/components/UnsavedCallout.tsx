import {
  CalloutIcon,
  CalloutRoot,
  CalloutText,
  Flex,
  Strong,
} from "@radix-ui/themes";
import { CiCircleInfo } from "react-icons/ci";

const UnsavedCallout = () => {
  return (
    <Flex mb="2">
      <CalloutRoot color="red" size="1">
        <CalloutIcon>
          <CiCircleInfo />
        </CalloutIcon>
        <CalloutText size="2">
          Leaving this page will <Strong>discard</Strong> the results data.
          Please <Strong>download the results</Strong> before leaving.
        </CalloutText>
      </CalloutRoot>
    </Flex>
  );
};

export default UnsavedCallout;
