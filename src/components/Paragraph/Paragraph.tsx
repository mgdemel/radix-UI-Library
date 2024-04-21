import { Text } from "@radix-ui/themes";
import React from "react";

type Props = {
  text: string;
};

export const Paragraph = ({ text }: Props) => {
  return <Text as="p">{text}</Text>;
};
