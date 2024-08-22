"use client";
import { IconButton } from "@radix-ui/themes";
import React, { useState } from "react";

type Props = {
  children: React.ReactNode;
};

export const ToggleButton = ({ children }: Props) => {
  const [isOn, setOn] = useState<boolean>(false);
  const toggle = () => setOn((isOn) => !isOn);
  return (
    <IconButton variant={isOn ? "solid" : "outline"} onClick={toggle}>
      {children}
    </IconButton>
  );
};
