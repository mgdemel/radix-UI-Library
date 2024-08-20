import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../Checkbox";
import { Theme } from "@radix-ui/themes";

const meta: Meta<typeof Checkbox> = {
  title: "Checkbox",
  component: Checkbox,
  decorators: [
    (Story) => (
      <Theme accentColor="crimson" grayColor="sand" radius="large">
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
