import type { Meta, StoryObj } from "@storybook/react";
import { SecondaryButton } from "../SecondaryButton";
import { Theme } from "@radix-ui/themes";

const meta: Meta<typeof SecondaryButton> = {
  title: "SecondaryButton",
  component: SecondaryButton,
  decorators: [
    (Story) => (
      <Theme accentColor="crimson" grayColor="sand" radius="large">
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

type Story = StoryObj<typeof SecondaryButton>;

export const Button: Story = {
  args: {
    text: "submit",
    onClick: () => console.log("Button")
  }
};
