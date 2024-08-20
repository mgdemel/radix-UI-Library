import { Color, DetailSize, Radius } from "@/utils/types";
import { Badge } from "@radix-ui/themes";

type Props = {
  label: string;
  size?: DetailSize;
  radius?: Radius;
  color?: Color;
};

export const Chip = ({ label, size, radius, color }: Props) => {
  return (
    <Badge variant="surface" size={size} radius={radius} color={color}>
      {label}
    </Badge>
  );
};
