import { Checkbox as RadixCheckbox, Text as RadixText } from "@radix-ui/themes";

type Props = {
  label: string;
  size?: "1" | "2" | "3";
};

export const Checkbox = ({ label, size }: Props) => {
  return (
    <RadixText as="label" size="2" className="flex gap-2">
      <RadixCheckbox size={size} variant="surface" highContrast />
      {label}
    </RadixText>
  );
};
