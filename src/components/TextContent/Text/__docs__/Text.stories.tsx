import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "../Text";
import { Theme } from "@/components/Theme";

const meta: Meta<typeof Text> = {
  title: "Components/Text Content",
  component: Text,
  decorators: [
    (Story) => (
      <Theme>
        <Story />
      </Theme>
    )
  ]
};
export default meta;

type Story = StoryObj<typeof Text>;

export const text: Story = {
  args: { text: "here is some text", type: "p", size: "3" }
};
