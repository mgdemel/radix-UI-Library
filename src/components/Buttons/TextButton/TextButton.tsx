import { Link } from "@radix-ui/themes";
import React from "react";

type Props = {
  text: string;
  styles?: string;
};

export const TextButton = ({ text, styles }: Props) => {
  const def = "py-2 px-4 text-primary focus:outline-none hover:text-secondary";
  return (
    <Link weight="regular" className={`${styles ? styles : def}`}>
      {text}
    </Link>
  );
};
