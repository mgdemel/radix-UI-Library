import { Theme } from "@/components";
import type { Meta, StoryObj } from "@storybook/react";
import { OutlinedButton } from "../OutlinedButton";

const meta: Meta<typeof OutlinedButton> = {
  title: "Components/Buttons",
  component: OutlinedButton,
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

type Story = StoryObj<typeof OutlinedButton>;

export const Outlined: Story = {
  args: {
    text: "submit",
    onClick: () => console.log("Button")
  }
};
