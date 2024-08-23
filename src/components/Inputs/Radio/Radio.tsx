import { DetailSize } from "@/utils/types";
import { Flex, Radio as RadixRadio, Text } from "@radix-ui/themes";

type Props = {
  value: string;
  label: string;
  size: DetailSize;
};
export const Radio = ({ value, label, size }: Props) => {
  return (
    <Flex asChild gap="2">
      <Text as="label" size={size} trim="both">
        <RadixRadio value={value} size={size} />
        {label}
      </Text>
    </Flex>
  );
};
