import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "../Chip";
import { Theme } from "@/components/Theme";

const meta: Meta<typeof Chip> = {
  title: "Components/Chip",
  component: Chip,
  decorators: [
    (Story) => (
      <Theme>
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
