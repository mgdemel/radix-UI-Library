import { Heading, Text, Theme } from "@/components";
import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
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

type Story = StoryObj<typeof Card>;

export const card: Story = {
  args: {
    children: (
      <>
        <Heading level="h2" size="6" text="Card Heading" />
        <Text text="Card paragraph" type="p" size="4" />
      </>
    )
  }
};
