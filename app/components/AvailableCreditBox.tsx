import RequestTimeoutErrorPage from "@/pages/RequestTimeoutErrorPage";
import {
  CalloutIcon,
  CalloutRoot,
  CalloutText,
  Flex,
  Kbd,
  Text,
} from "@radix-ui/themes";
import axios from "axios";
import { useEffect, useState } from "react";
import { IoMdInformationCircle } from "react-icons/io";
import Skeleton from "react-loading-skeleton";
import TopUpDialog from "./TopUpDialog";

const AvailableCreditBox = () => {
  const [credit, setCredit] = useState<number | undefined>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCredit = async () => {
      try {
        await axios
          .get<string>("/api/credit")
          .then((res) => setCredit(parseInt(res.data)));
        setIsLoading(false);
      } catch (error) {
        return <RequestTimeoutErrorPage />;
      }
    };
    fetchCredit();
  }, []);

  return (
    <Flex direction="column" gap="2">
      <Flex align="center" justify="start" gap="2" mx="1">
        <Kbd size="3">Available Credits</Kbd>
        {isLoading ? (
          <Skeleton width="2rem" />
        ) : (
          <>
            <Text size="3" weight="bold">
              {credit}
            </Text>
            <TopUpDialog />
          </>
        )}
      </Flex>
      {!isLoading && credit === 0 && (
        <Flex mx="1">
          <CalloutRoot color="red" size="1">
            <CalloutIcon>
              <IoMdInformationCircle />
            </CalloutIcon>
            <CalloutText>You may have insufficient credits.</CalloutText>
          </CalloutRoot>
        </Flex>
      )}
    </Flex>
  );
};

export default AvailableCreditBox;
