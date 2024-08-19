import { IconButton as RadixIconButton } from "@radix-ui/themes";
import React from "react";
type Props = {
  children: React.ReactNode;
  size?: "1" | "2" | "3" | "4";
  radius?: "small" | "medium" | "large" | "full";
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
