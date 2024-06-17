import { Blockquote as RadixBlockquote } from "@radix-ui/themes";

type Props = {
  text: string;
};

export const Blockquote = ({ text }: Props) => {
  const baseStyles = "ml-8";
  return (
    <RadixBlockquote
      size="5"
      weight="medium"
      highContrast
      className={`${baseStyles}`}
    >
      {text}
    </RadixBlockquote>
  );
};
