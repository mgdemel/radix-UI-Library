import { Heading } from "@radix-ui/themes";
import React from "react";

type Props = {
  text: string;
};

export const Title = ({ text }: Props) => {
  return <Heading as="h1">{text}</Heading>;
};
