import { Theme } from "@/components";
import { TextArea } from "@radix-ui/themes";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TextArea> = {
  title: "Components/Inputs",
  component: TextArea,
  decorators: [
    (Story) => (
      <Theme>
        <Story />
      </Theme>
    )
  ]
};
export default meta;

type Story = StoryObj<typeof TextArea>;

export const Text: Story = {
  args: { placeholder: "placeholder" }
};
