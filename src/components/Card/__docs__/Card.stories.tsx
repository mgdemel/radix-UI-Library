import { Theme } from "@/components";
import { Heading, Card as RadixCard, Text } from "@radix-ui/themes";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RadixCard> = {
  title: "Components/Card",
  component: RadixCard,
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

type Story = StoryObj<typeof RadixCard>;

export const Card: Story = {
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
