import { Color } from "@/utils/types";
import { Badge } from "@radix-ui/themes";

type Props = {
  label: string;
  size?: "1" | "2" | "3";
  radius?: "small" | "medium" | "large" | "full";
  color?: Color;
};

export const Chip = ({ label, size, radius, color }: Props) => {
  return (
    <Badge variant="surface" size={size} radius={radius} color={color}>
      {label}
    </Badge>
  );
};
