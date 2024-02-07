import RequestTimeoutErrorPage from "@/pages/RequestTimeoutErrorPage";
import {
  Badge,
  CalloutIcon,
  CalloutRoot,
  CalloutText,
  Flex,
  Text,
} from "@radix-ui/themes";
import axios from "axios";
import { useEffect, useState } from "react";
import { IoMdInformationCircle } from "react-icons/io";
import Skeleton from "react-loading-skeleton";

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
      <Flex align="center" justify="start" gap="1" mx="1">
        <Badge color="blue">Available Credit</Badge>
        {isLoading ? (
          <Skeleton width="2rem" />
        ) : (
          <Text size="3" weight="bold">
            {credit}
          </Text>
        )}
      </Flex>
      {!isLoading && credit === 0 && (
        <Flex>
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
