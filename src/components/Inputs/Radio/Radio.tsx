import { DetailSize } from "@/utils/types";
import { Radio as RadixRadio, Text as RadixText } from "@radix-ui/themes";

type Props = {
  value: string;
  label: string;
  size?: DetailSize;
};
export const Radio = ({ value, label, size }: Props) => {
  return (
    <RadixText
      as="label"
      size={size}
      trim="both"
      className="flex gap-2 items-center leading-none"
    >
      <RadixRadio value={value} size={size} variant="surface" highContrast />
      {label}
    </RadixText>
  );
};
