"use client";
import React, { useState } from "react";
import * as RadixAccordion from "@radix-ui/react-accordion";
import { AccordionItem } from "./AccordionItem";
import { ArrowToggleIcon } from "@/components";

type Props = {
  items: Item[];
};

export type Item = {
  id: string;
  header: string;
  content: string;
};

export const Accordion = ({ items }: Props) => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <RadixAccordion.Root type="single" defaultValue="item-1" collapsible>
      {items.map((i) => (
        <AccordionItem key={i.id} id={i.id} content={i.content}>
          <RadixAccordion.Trigger
            className="flex"
            onClick={() => toggleAccordion(i.id)}
          >
            {i.header}
            <ArrowToggleIcon isOpen={openId === i.id} />
          </RadixAccordion.Trigger>
        </AccordionItem>
      ))}
    </RadixAccordion.Root>
  );
};
