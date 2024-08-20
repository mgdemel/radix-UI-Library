import { DetailSize } from "@/utils/types";
import { Checkbox as RadixCheckbox, Text as RadixText } from "@radix-ui/themes";

type Props = {
  label: string;
  size?: DetailSize;
};

export const Checkbox = ({ label, size }: Props) => {
  return (
    <RadixText
      as="label"
      size={size}
      trim="both"
      className="flex gap-2 items-center leading-none"
    >
      <RadixCheckbox size={size} variant="surface" highContrast />
      {label}
    </RadixText>
  );
};
