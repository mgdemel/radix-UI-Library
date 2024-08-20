import type { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "../TextInput";
import { Theme } from "@radix-ui/themes";

const meta: Meta<typeof TextInput> = {
  title: "TextInput",
  component: TextInput,
  decorators: [
    (Story) => (
      <Theme accentColor="crimson" grayColor="sand" radius="large">
        <Story />
      </Theme>
    )
  ]
};
export default meta;

type Story = StoryObj<typeof TextInput>;

export const textInput: Story = {
  args: {}
};
