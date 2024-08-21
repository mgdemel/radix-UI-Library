"use client";
import { ArrowToggleIcon } from "@/components";
import * as RadixAccordion from "@radix-ui/react-accordion";
import { useState } from "react";
type AccordionProps = {
  itemId: string;
  children: React.ReactNode;
};

export const AccordionItem = ({ itemId, children }: AccordionProps) => {
  return (
    <RadixAccordion.Item className="py-2 w-full" value={itemId}>
      {children}
    </RadixAccordion.Item>
  );
};

type AccordionItemProps = {
  children: React.ReactNode;
};
export const AccordionItemTrigger = ({ children }: AccordionItemProps) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const toggleAccordion = () => setOpen((isOpen) => !isOpen);
  return (
    <RadixAccordion.Header className="py-2 font-semibold">
      <RadixAccordion.Trigger
        className="align-end w-fit flex flex-row"
        onClick={toggleAccordion}
      >
        {children}
        <ArrowToggleIcon isOpen={isOpen} />
      </RadixAccordion.Trigger>
    </RadixAccordion.Header>
  );
};

export const AccordionItemContent = ({ children }: AccordionItemProps) => {
  return (
    <RadixAccordion.Content className="py-2 overflow-hidden transition-all duration-300 ease-in-out">
      {children}
    </RadixAccordion.Content>
  );
};
