import { Heading } from "@radix-ui/themes";
import React from "react";

interface Props {
  text: string;
}

export const Title: React.FC<Props> = ({ text }) => {
  return <Heading as="h1">{text}</Heading>;
};
