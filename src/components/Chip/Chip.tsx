import { Color, DetailSize } from "@/utils/types";
import { Badge } from "@radix-ui/themes";

type Props = {
  label: string;
  size?: DetailSize;
  color?: Color;
};

export const Chip = ({ label, size, color }: Props) => {
  return (
    <Badge variant="surface" size={size} color={color}>
      {label}
    </Badge>
  );
};
