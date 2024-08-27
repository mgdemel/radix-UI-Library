import { Theme } from "@/components";
import type { Meta, StoryObj } from "@storybook/react";
import { Radio as RadixRadio } from "../Radio";

const meta: Meta<typeof RadixRadio> = {
  title: "Components/Inputs",
  component: RadixRadio,
  decorators: [
    (Story) => (
      <Theme>
        <Story />
      </Theme>
    )
  ]
};
export default meta;

type Story = StoryObj<typeof RadixRadio>;

export const Radio: Story = {
  args: { value: "value", label: "label", size: "1" }
};
