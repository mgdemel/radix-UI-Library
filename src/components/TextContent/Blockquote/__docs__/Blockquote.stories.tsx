import type { Meta, StoryObj } from "@storybook/react";
import { Blockquote } from "../Blockquote";
import { Theme } from "@/components/Theme";

const meta: Meta<typeof Blockquote> = {
  title: "Components/Text Content",
  component: Blockquote,
  decorators: [
    (Story) => (
      <Theme>
        <Story />
      </Theme>
    )
  ]
};
export default meta;

type Story = StoryObj<typeof Blockquote>;

export const blockquote: Story = {
  args: { text: "here is a block quote" }
};
