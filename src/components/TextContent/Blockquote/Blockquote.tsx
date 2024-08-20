import { TextSize, TextWeight } from "@/utils/types";
import { Blockquote as RadixBlockquote } from "@radix-ui/themes";

type Props = {
  text: string;
  size?: TextSize;
  weight?: TextWeight;
};

export const Blockquote = ({ text, size, weight }: Props) => {
  const baseStyles = "ml-8";
  return (
    <RadixBlockquote
      size={size}
      weight={weight}
      highContrast
      className={`${baseStyles}`}
    >
      {text}
    </RadixBlockquote>
  );
};
