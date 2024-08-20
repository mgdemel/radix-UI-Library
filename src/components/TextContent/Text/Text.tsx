import { TextAlign, TextSize, TextTag, TextWeight } from "@/utils/types";
import { Text as RadixText } from "@radix-ui/themes";

type Props = {
  text: string;
  type: TextTag;
  size?: TextSize;
  weight?: TextWeight;
  align?: TextAlign;
  customStyles?: string;
};

export const Text = ({
  text,
  type,
  size,
  weight,
  align,
  customStyles
}: Props) => {
  const baseStyles = "m-1 ";
  return (
    <RadixText
      as={type}
      size={size}
      weight={weight}
      align={align}
      className={`${baseStyles + customStyles}`}
    >
      {text}
    </RadixText>
  );
};
