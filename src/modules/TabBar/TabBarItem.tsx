"use client";
import { Tabs } from "@radix-ui/themes";
import React from "react";

export type TabItem = {
  value: string;
  children: React.ReactNode;
};

export const TabBarItem = ({ value, children }: TabItem) => {
  return <Tabs.Content value={value}>{children}</Tabs.Content>;
};
