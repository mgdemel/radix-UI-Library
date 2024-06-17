import { Blockquote as RadixBlockquote } from "@radix-ui/themes";

type Props = {
  text: string;
  size?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
  weight?: "light" | "regular" | "medium" | "bold";
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
