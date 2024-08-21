import { Theme } from "@/components";
import type { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "../TextInput";

const meta: Meta<typeof TextInput> = {
  title: "Components/Inputs",
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
