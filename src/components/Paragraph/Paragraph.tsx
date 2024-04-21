import { Text } from "@radix-ui/themes";
import React from "react";

interface Props {
  text: string;
}

export const Paragraph: React.FC<Props> = ({ text }) => {
  return <Text as="p">{text}</Text>;
};
