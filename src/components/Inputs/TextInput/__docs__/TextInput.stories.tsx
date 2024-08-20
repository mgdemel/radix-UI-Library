import type { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "../TextInput";
import { Theme } from "@/components/Theme";

const meta: Meta<typeof TextInput> = {
  title: "TextInput",
  component: TextInput,
  decorators: [
    (Story) => (
      <Theme>
        <Story />
      </Theme>
    )
  ]
};
export default meta;

type Story = StoryObj<typeof TextInput>;

export const textInput: Story = {
  args: { placeholder: "placeholder" }
};
