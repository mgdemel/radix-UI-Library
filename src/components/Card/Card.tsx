import { Card } from "@radix-ui/themes";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const ContentCard = ({ children }: Props) => {
  return <Card variant="classic">{children}</Card>;
};
