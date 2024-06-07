import { Button } from "@radix-ui/themes";
import React from "react";

type Props = {
  text: string;
  styles?: string;
};

export const PrimaryButton = ({ text, styles }: Props) => {
  const def =
    "py-2 px-4 rounded font-medium text-white focus:outline-none bg-primary hover:bg-secondary";
  return (
    <Button variant="solid" className={`${styles ? styles : def}`}>
      {text}
    </Button>
  );
};
