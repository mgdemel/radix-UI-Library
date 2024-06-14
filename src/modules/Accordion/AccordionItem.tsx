"use client";
import React from "react";
import * as RadixAccordion from "@radix-ui/react-accordion";

type Props = {
  id: string;
  children: React.ReactNode;
  content: string;
};

export const AccordionItem = ({ id, children, content }: Props) => {
  return (
    <RadixAccordion.Item className="py-2 w-full" value={id}>
      <RadixAccordion.Header className="py-2 font-semibold">
        {children}
      </RadixAccordion.Header>
      <RadixAccordion.Content className="py-2 overflow-hidden transition-all duration-300 ease-in-out">
        {content}
      </RadixAccordion.Content>
    </RadixAccordion.Item>
  );
};
