"use client";
import React from "react";
import * as RadixAccordion from "@radix-ui/react-accordion";
import { ArrowToggleIcon } from "@/components";

type Props = {
  isOpen: boolean;
  trigger: React.ReactNode;
  content: React.ReactNode;
};

export const AccordionItem = ({ isOpen, trigger, content }: Props) => {
  <RadixAccordion.Item className="py-2 w-full" value="item-1">
    <RadixAccordion.Header className="py-2 font-semibold">
      <RadixAccordion.Trigger className="flex">
        {trigger}
        <ArrowToggleIcon isOpen={isOpen} />
      </RadixAccordion.Trigger>
    </RadixAccordion.Header>
    <RadixAccordion.Content className="py-2 overflow-hidden transition-all duration-300 ease-in-out">
      {content}
    </RadixAccordion.Content>
  </RadixAccordion.Item>;
};
