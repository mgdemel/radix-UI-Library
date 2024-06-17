import { Text as RadixText } from "@radix-ui/themes";

type Props = {
  content: string;
  type: "span" | "div" | "label" | "p";
  size?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
  weight?: "light" | "regular" | "medium" | "bold";
  align?: "left" | "center" | "right";
  customStyles?: string;
};

export const Text = ({
  content,
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
      {content}
    </RadixText>
  );
};
