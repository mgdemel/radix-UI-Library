import { Text, Theme } from "@/components";
import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "../Accordion";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger
} from "../AccordionItem";

const meta: Meta<typeof Accordion> = {
  title: "Modules/Accordion",
  component: Accordion,
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

type Story = StoryObj<typeof Accordion>;

export const accordion: Story = {
  args: {
    itemId: "accordion-1",
    children: (
      <>
        <AccordionItem itemId="item-1">
          <AccordionItemTrigger>
            <Text type="p" text="accordion header" />
          </AccordionItemTrigger>
          <AccordionItemContent>
            <Text type="p" text="accordion content" />
          </AccordionItemContent>
        </AccordionItem>
        <AccordionItem itemId="item-2">
          <AccordionItemTrigger>
            <Text type="p" text="accordion header" />
          </AccordionItemTrigger>
          <AccordionItemContent>
            <Text type="p" text="accordion content" />
          </AccordionItemContent>
        </AccordionItem>
        <AccordionItem itemId="item-3">
          <AccordionItemTrigger>
            <Text type="p" text="accordion header" />
          </AccordionItemTrigger>
          <AccordionItemContent>
            <Text type="p" text="accordion content" />
          </AccordionItemContent>
        </AccordionItem>
      </>
    ),
    type: "single"
  }
};
