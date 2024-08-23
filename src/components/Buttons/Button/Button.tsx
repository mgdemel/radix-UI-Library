import { ButtonSize, ButtonType } from "@/utils/types";
import { Button as RadixButton } from "@radix-ui/themes";

type Props = {
  text: string;
  type: ButtonType;
  size?: ButtonSize;
  disabled?: boolean;
  onClick: () => void;
};

export const Button = ({ text, type, size, disabled, onClick }: Props) => {
  return (
    <RadixButton
      size={size}
      variant={getVariant(type)}
      className={"font-semibold px-4 py-2"}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </RadixButton>
  );
};

export const getVariant = (type: ButtonType) => {
  if (type === "primary") return "solid";
  else if (type === "secondary") return "soft";
  else if (type === "outline") return "outline";
};
