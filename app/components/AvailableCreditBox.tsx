import { Badge, Flex, Text } from "@radix-ui/themes";
import axios from "axios";
import { useEffect, useState } from "react";

const AvailableCreditBox = () => {
  const [credit, setCredit] = useState<number | undefined>(0);

  useEffect(() => {
    const fetchCredit = async () => {
      try {
        await axios
          .get<string>("/api/user")
          .then((res) => setCredit(parseInt(res.data)));
      } catch (error) {
        console.log("Invalid User.");
      }
    };
    fetchCredit();
  }, []);

  return (
    <Flex align="center" justify="start" gap="1" mx="1">
      <Badge color="blue">Available Credit</Badge>
      <Text size="3" weight="bold">
        {credit}
      </Text>
    </Flex>
  );
};

export default AvailableCreditBox;
