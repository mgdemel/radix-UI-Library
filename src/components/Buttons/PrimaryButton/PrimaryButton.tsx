import { ButtonSize } from "@/utils/types";
import { Button } from "@radix-ui/themes";

type Props = {
  text: string;
  size?: ButtonSize;
  customStyles?: string;
  onClick: () => void;
};

export const PrimaryButton = ({ text, size, customStyles, onClick }: Props) => {
  const baseStyles = "py-2 px-4 rounded font-medium focus:outline-none ";
  return (
    <Button
      size={size}
      variant="solid"
      className={`${baseStyles + customStyles}`}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};
