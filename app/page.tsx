import { Button, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import { GiClick } from "react-icons/gi";

export default function Home() {
  return (
    <Button>
      <Link href="/get-started">
        <Flex gap="3" justify="center" align="center">
          <Text>Get Started</Text>
          <GiClick />
        </Flex>
      </Link>
    </Button>
  );
}
