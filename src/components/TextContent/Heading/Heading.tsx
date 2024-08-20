import { TextAlign, TextLevel, TextSize, TextWeight } from "@/utils/types";
import { Heading as RadixHeading } from "@radix-ui/themes";

type Props = {
  text: string;
  level: TextLevel;
  size?: TextSize;
  weight?: TextWeight;
  align?: TextAlign;
  customStyles?: string;
};

export const Heading = ({
  text,
  level,
  size,
  weight,
  align,
  customStyles
}: Props) => {
  return (
    <RadixHeading
      as={level}
      size={size}
      align={align}
      weight={weight}
      className={`${customStyles}`}
    >
      {text}
    </RadixHeading>
  );
};
