import { Theme } from "@/components";
import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "../Radio";

const meta: Meta<typeof Radio> = {
  title: "Components/Inputs",
  component: Radio,
  decorators: [
    (Story) => (
      <Theme>
        <Story />
      </Theme>
    )
  ]
};
export default meta;

type Story = StoryObj<typeof Radio>;

export const radio: Story = {
  args: { value: "value", label: "label" }
};
