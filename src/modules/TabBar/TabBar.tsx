"use client";
import React from "react";
import { Tabs } from "@radix-ui/themes";

type Props = {
  label: string;
  children: React.ReactNode;
};

interface ChildProps {
  value: string;
  children: React.ReactNode;
}

export const TabBar: React.FC<Props> = ({ label, children }) => {
  const validChildren = React.Children.toArray(children).filter(
    React.isValidElement
  );
  const childValues = validChildren.map((child) => {
    const element = child as React.ReactElement<ChildProps>;
    return element.props.value;
  });

  return (
    <Tabs.Root className="flex flex-col" defaultValue={childValues[0]}>
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
      {children}
    </Tabs.Root>
  );
};
