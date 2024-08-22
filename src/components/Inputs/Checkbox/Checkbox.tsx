import { DetailSize } from "@/utils/types";
import { Flex, Checkbox as RadixCheckbox, Text } from "@radix-ui/themes";

type Props = {
  label: string;
  size: DetailSize;
};

export const Checkbox = ({ label, size }: Props) => {
  return (
    <Text as="label" size={size} trim="both">
      <Flex as="span" gap="2">
        <RadixCheckbox size={size} />
        {label}
      </Flex>
    </Text>
  );
};
