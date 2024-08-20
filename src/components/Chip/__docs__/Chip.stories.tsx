import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "../Chip";
import { Theme } from "@radix-ui/themes";
import { Heading, Text } from "@/components/TextContent";

const meta: Meta<typeof Chip> = {
  title: "Chip",
  component: Chip,
  decorators: [
    (Story) => (
      <Theme accentColor="crimson" grayColor="sand" radius="large">
        <Story />
      </Theme>
    )
  ]
};
export default meta;

type Story = StoryObj<typeof Chip>;

export const chip: Story = {
  args: { label: "label" }
};
