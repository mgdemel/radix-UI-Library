"use client";
import { Tabs } from "@radix-ui/themes";
import React from "react";
import { TabItem } from "./TabBarItem";

type Props = {
  defaultValue: string;
  label: string;
  children: React.ReactNode;
  childValues?: string[];
};

export const TabBar = ({
  defaultValue,
  label,
  children,
  childValues = getChildrenValues(children)
}: Props) => {
  return (
    <Tabs.Root className="flex flex-col" defaultValue={defaultValue}>
      <Tabs.List
        color="crimson"
        highContrast
        wrap="nowrap"
        justify="center"
        aria-label={label}
        className="justify-between"
      >
        {childValues.map((value) => (
          <Tabs.Trigger key={value} value={value}>
            {value}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      <div className="py-2">{children}</div>
    </Tabs.Root>
  );
};

const getChildrenValues = (children: React.ReactNode) => {
  const validChildren = React.Children.toArray(children).filter(
    React.isValidElement
  );
  return validChildren.map((child) => {
    const element = child as React.ReactElement<TabItem>;
    return element.props.value;
  });
};
