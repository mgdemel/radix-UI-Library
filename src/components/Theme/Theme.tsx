import { Theme as RadixTheme } from "@radix-ui/themes";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const Theme = ({ children }: Props) => (
  <RadixTheme accentColor="crimson" grayColor="sand" radius="large">
    {children}
  </RadixTheme>
);
