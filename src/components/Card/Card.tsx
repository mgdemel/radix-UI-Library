import { Card as RadixCard } from "@radix-ui/themes";
import React from "react";
type Props = {
  children: React.ReactNode;
};

export const Card = ({ children }: Props) => {
  return (
    <RadixCard variant="classic" className="w-96 p-8">
      {children}
    </RadixCard>
  );
};
