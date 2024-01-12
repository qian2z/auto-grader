import { capitaliseWord } from "@/utils/capitaliseWord";
import { Badge, Flex } from "@radix-ui/themes";
import { Options } from "../submissionsStore";

const OptionBadgesBox = ({ options }: { options: Options }) => {
  return (
    <Flex gap="2" justify="end">
      <Badge color="bronze" variant="surface">
        {capitaliseWord(options.level)}
      </Badge>
      <Badge color="grass" variant="surface">
        {capitaliseWord(options.type)}
      </Badge>
      <Badge color="purple" variant="surface">
        Min Word Count: {options.wordCount}
      </Badge>
    </Flex>
  );
};

export default OptionBadgesBox;
