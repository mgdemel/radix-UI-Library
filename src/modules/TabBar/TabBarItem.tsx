"use client";
import React from "react";
import { Tabs } from "@radix-ui/themes";

type Props = {
  value: string;
  children: React.ReactNode;
};

export const TabItem = ({ value, children }: Props) => {
  return <Tabs.Content value={value}>{children}</Tabs.Content>;
};
