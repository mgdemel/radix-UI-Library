import { Heading as RadixHeading } from "@radix-ui/themes";

type Props = {
  text: string;
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
  weight?: "light" | "regular" | "medium" | "bold";
  align?: "left" | "center" | "right";
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
