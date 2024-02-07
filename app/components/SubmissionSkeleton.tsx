import { Badge, Box, Flex, Text } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SubmissionActionsBox from "./SubmissionActionsBox";

const SubmissionSkeleton = () => {
  const selections = [
    { id: 1, label: "Essay Level", count: 1 },
    { id: 2, label: "Essay Type", count: 1 },
    { id: 3, label: "Scoring Scale", count: 1 },
    { id: 4, label: "Essay Word Count (Min)", count: 1 },
    { id: 5, label: "Feedback Detail Level", count: 3 },
  ];

  return (
    <Flex direction="column" m="5">
      <Flex gap="6" justify="center" align="start">
        <Flex direction="column" gap="3" className="w-3/5">
          <Skeleton className="h-24" />
          <Skeleton count={15} />
        </Flex>
        <Flex direction="column" gap="5">
          <Flex align="center" justify="start" gap="1" mx="1">
            <Badge color="blue">Available Credit</Badge>
            <Skeleton width="2rem" />
          </Flex>
          {selections.map((selection) => (
            <Flex direction="column" gap="1" key={selection.id}>
              <Text as="label" size="3" weight="bold">
                {selection.label}
              </Text>
              <Box ml="3">
                <Skeleton count={selection.count} />
              </Box>
            </Flex>
          ))}
        </Flex>
      </Flex>
      <Flex justify="end">
        <SubmissionActionsBox />
      </Flex>
    </Flex>
  );
};

export default SubmissionSkeleton;
