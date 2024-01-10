import { SkeletonCircle } from "@chakra-ui/react";
import {
  Badge,
  Flex,
  Heading,
  IconButton,
  Kbd,
  Separator,
} from "@radix-ui/themes";
import { FaFile } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ResultSkeleton = () => {
  return (
    <Flex direction="column" gap="3">
      <Heading size="4">
        <Skeleton count={3} />
      </Heading>
      <Separator size="4" />
      <Flex direction="column" gap="4" justify="center" align="start" m="5">
        <Flex align="center" gap="3">
          <IconButton>
            <FaFile />
          </IconButton>
          <Kbd size="4">
            <Skeleton width="150px" />
          </Kbd>
        </Flex>
        <Separator size="4" />
        <Flex direction="row" className="min-h-36 w-full">
          <Flex direction="column" gap="3" className="w-1/5" align="center">
            <Badge color="orange" className="w-fit h-5" variant="solid">
              Overall Rating
            </Badge>
            <Flex
              direction="column"
              align="center"
              justify="center"
              className="h-full"
              gap="2"
              mt="3"
            >
              <SkeletonCircle size="16" />
              <Skeleton containerClassName="flex-1 h-1" width="60px" />
            </Flex>
          </Flex>
          <Flex direction="column" gap="3" className="w-4/5">
            <Badge color="jade" className="w-fit h-5" variant="solid">
              Comment
            </Badge>
            <Skeleton count={5} />
          </Flex>
        </Flex>
        <Separator size="4" />
        <Flex direction="column" gap="2" className="w-full">
          <Badge color="blue" className="w-fit" variant="solid">
            Essay Body
          </Badge>
          <Skeleton count={10} />
        </Flex>
      </Flex>
      <Flex justify="end">
        <Flex className="w-1/12">
          <Skeleton containerClassName="flex-1" height="25px" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ResultSkeleton;
