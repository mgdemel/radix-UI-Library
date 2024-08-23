"use client";
import * as RadixAccordion from "@radix-ui/react-accordion";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { Flex, Text } from "@radix-ui/themes";
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
    <RadixAccordion.Header>
      <RadixAccordion.Trigger onClick={toggleAccordion}>
        <Flex gap="1" align="center">
          <Text as="span" trim="both" weight="medium" align="center">
            {children}
          </Text>
          {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </Flex>
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
