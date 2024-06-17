import { Button } from "@radix-ui/themes";

type Props = {
  text: string;
  size?: "1" | "2" | "3" | "4";
  customStyles?: string;
};

export const PrimaryButton = ({ text, size, customStyles }: Props) => {
  const baseStyles = "py-2 px-4 rounded font-medium focus:outline-none ";
  return (
    <Button
      size={size}
      variant="solid"
      className={`${baseStyles + customStyles}`}
    >
      {text}
    </Button>
  );
};
