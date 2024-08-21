"use client";
import * as RadixAccordion from "@radix-ui/react-accordion";
type AccordionProps = {
  type: "single" | "multiple";
  itemId: string;
  children: React.ReactNode;
};

export const Accordion = ({ type, children }: AccordionProps) => {
  return (
    <RadixAccordion.Root type={type} collapsible>
      {children}
    </RadixAccordion.Root>
  );
};
