import type { Meta, StoryObj } from "@storybook/react";
import { TextButton } from "../TextButton";
import { Theme } from "@/components/Theme";

const meta: Meta<typeof TextButton> = {
  title: "TextButton",
  component: TextButton,
  decorators: [
    (Story) => (
      <Theme>
        <Story />
      </Theme>
    )
  ],
  argTypes: {
    onClick: {
      table: {
        disable: true
      }
    }
  }
};
export default meta;

type Story = StoryObj<typeof TextButton>;

export const Button: Story = {
  args: {
    text: "link",
    onClick: () => console.log("Button")
  }
};
