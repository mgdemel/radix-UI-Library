import { Theme } from "@/components";
import { Text } from "@radix-ui/themes";
import type { Meta, StoryObj } from "@storybook/react";
import { Accordion as CustomAccordion } from "../Accordion";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger
} from "../AccordionItem";

const meta: Meta<typeof CustomAccordion> = {
  title: "Modules",
  component: CustomAccordion,
  decorators: [
    (Story) => (
      <Theme>
        <Story />
      </Theme>
    )
  ],
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
};
export default meta;

type Story = StoryObj<typeof CustomAccordion>;

export const Accordion: Story = {
  args: {
    itemId: "accordion-1",
    children: (
      <>
        <AccordionItem itemId="item-1">
          <AccordionItemTrigger>
            <Text>accordion header</Text>
          </AccordionItemTrigger>
          <AccordionItemContent>
            <Text>accordion content</Text>
          </AccordionItemContent>
        </AccordionItem>
        <AccordionItem itemId="item-2">
          <AccordionItemTrigger>
            <Text>accordion header</Text>
          </AccordionItemTrigger>
          <AccordionItemContent>
            <Text>accordion content</Text>
          </AccordionItemContent>
        </AccordionItem>
        <AccordionItem itemId="item-3">
          <AccordionItemTrigger>
            <Text>accordion header</Text>
          </AccordionItemTrigger>
          <AccordionItemContent>
            <Text>accordion content</Text>
          </AccordionItemContent>
        </AccordionItem>
      </>
    ),
    type: "single"
  }
};
