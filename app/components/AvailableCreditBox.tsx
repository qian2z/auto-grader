import useCredit from "@/hooks/useCredit";
import { Badge, Flex, Text } from "@radix-ui/themes";
import { useEffect, useState } from "react";

const AvailableCreditBox = () => {
  const [credit, setCredit] = useState(0);

  useEffect(() => {
    useCredit(setCredit);
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
