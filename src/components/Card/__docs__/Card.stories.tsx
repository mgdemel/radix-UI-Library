import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../Card";
import { Theme } from "@radix-ui/themes";
import { Heading, Text } from "@/components/TextContent";

const meta: Meta<typeof Card> = {
  title: "Card",
  component: Card,
  decorators: [
    (Story) => (
      <Theme accentColor="crimson" grayColor="sand" radius="large">
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

type Story = StoryObj<typeof Card>;

export const card: Story = {
  args: {
    children: (
      <>
        <Heading level="h2" size="6" text="Card Heading" />
        <Text content="Card paragraph" type="p" size="4" />
      </>
    )
  }
};
