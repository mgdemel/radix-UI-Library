import { ButtonSize } from "@/utils/types";
import { Button } from "@radix-ui/themes";

type Props = {
  text: string;
  size?: ButtonSize;
  disabled?: boolean;
  onClick: () => void;
};

export const OutlinedButton = ({ text, size, disabled, onClick }: Props) => {
  return (
    <Button
      size={size}
      radius="medium"
      variant="outline"
      className={"font-semibold px-4 py-2"}
      onClick={onClick}
      disabled={disabled}
      highContrast
    >
      {text}
    </Button>
  );
};
