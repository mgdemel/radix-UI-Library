import { Theme } from "@/components";
import { Card, Heading, Text } from "@radix-ui/themes";
import type { Meta, StoryObj } from "@storybook/react";

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
        <Heading as="h2" size="6">
          Card Heading
        </Heading>
        <Text>Card paragraph.</Text>
      </>
    )
  }
};
