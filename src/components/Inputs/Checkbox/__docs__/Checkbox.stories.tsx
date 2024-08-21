import { Theme } from "@/components";
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Inputs",
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
