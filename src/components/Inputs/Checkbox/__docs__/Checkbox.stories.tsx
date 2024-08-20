import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../Checkbox";
import { Theme } from "@/components/Theme";

const meta: Meta<typeof Checkbox> = {
  title: "Checkbox",
  component: Checkbox,
  decorators: [
    (Story) => (
      <Theme>
        <Story />
      </Theme>
    )
  ]
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const checkbox: Story = {
  args: { label: "label" }
};
