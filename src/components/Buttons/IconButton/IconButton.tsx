import { ButtonSize, Radius } from "@/utils/types";
import { IconButton as RadixIconButton } from "@radix-ui/themes";
import React from "react";
type Props = {
  children: React.ReactNode;
  size?: ButtonSize;
  radius?: Radius;
  onClick: () => void;
};
export const IconButton = ({ children, size, radius, onClick }: Props) => {
  return (
    <RadixIconButton
      variant="surface"
      size={size}
      radius={radius}
      onClick={onClick}
      highContrast
    >
      {children}
    </RadixIconButton>
  );
};
