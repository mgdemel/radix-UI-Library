import { Button } from "@radix-ui/themes";

type Props = {
  text: string;
  size?: "1" | "2" | "3" | "4";
  customStyles?: string;
  onClick: () => void;
};

export const SecondaryButton = ({
  text,
  size,
  customStyles,
  onClick
}: Props) => {
  const baseStyles = "py-2 px-4 rounded font-medium ";
  return (
    <Button
      size={size}
      variant="surface"
      className={`${baseStyles + customStyles}`}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};
