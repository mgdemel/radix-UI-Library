import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "../Radio";
import { Theme } from "@radix-ui/themes";

const meta: Meta<typeof Radio> = {
  title: "Radio",
  component: Radio,
  decorators: [
    (Story) => (
      <Theme accentColor="crimson" grayColor="sand" radius="large">
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
