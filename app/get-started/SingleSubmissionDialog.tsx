import {
  Button,
  Card,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
  Flex,
  Inset,
  Text,
  TextArea,
} from "@radix-ui/themes";
import { LuType } from "react-icons/lu";

const SingleSubmissionDialog = () => {
  return (
    <DialogRoot>
      <DialogTrigger>
        <Card className="hover:font-medium hover:bg-sky-50 cursor-pointer transition-colors">
          <Flex
            direction="column"
            align="center"
            justify="center"
            className="w-40 h-36 m-5"
          >
            <Inset clip="padding-box" side="top" pb="current">
              <LuType size={40} />
            </Inset>
            <Text>Single Submission</Text>
          </Flex>
        </Card>
      </DialogTrigger>
      <DialogContent size="4">
        <DialogTitle>Single Submission</DialogTitle>
        <DialogDescription> </DialogDescription>
        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Essay Title
            </Text>
            <TextArea
              placeholder="Title..."
              className="border-solid border border-gray-300 h-32"
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Essay Body
            </Text>
            <TextArea
              placeholder="Essay..."
              className="border-solid border border-gray-300 h-60"
            />
          </label>
        </Flex>
        <Flex gap="3" mt="4" justify="end">
          <DialogClose>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </DialogClose>
          <DialogClose>
            <Button>Next</Button>
          </DialogClose>
        </Flex>
      </DialogContent>
    </DialogRoot>
  );
};

export default SingleSubmissionDialog;
