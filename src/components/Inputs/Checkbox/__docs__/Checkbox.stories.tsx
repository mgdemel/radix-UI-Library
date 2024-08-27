import { Theme } from "@/components";
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox as RadixCheckbox } from "../Checkbox";

const meta: Meta<typeof RadixCheckbox> = {
  title: "Components/Inputs",
  component: RadixCheckbox,
  decorators: [
    (Story) => (
      <Theme>
        <Story />
      </Theme>
    )
  ]
};
export default meta;

type Story = StoryObj<typeof RadixCheckbox>;

export const Checkbox: Story = {
  args: { label: "label", size: "1" }
};
