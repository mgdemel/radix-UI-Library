import type { Meta, StoryObj } from "@storybook/react";
import { PrimaryButton } from "../PrimaryButton";
import { Theme } from "@/components/Theme";

const meta: Meta<typeof PrimaryButton> = {
  title: "PrimaryButton",
  component: PrimaryButton,
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

type Story = StoryObj<typeof PrimaryButton>;

export const Button: Story = {
  args: {
    text: "submit",
    onClick: () => console.log("Button")
  }
};
