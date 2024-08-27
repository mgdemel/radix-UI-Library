import { Theme } from "@/components";
import type { Meta, StoryObj } from "@storybook/react";
import { Button as RadixButton } from "../Button";

const meta: Meta<typeof RadixButton> = {
  title: "Components/Buttons",
  component: RadixButton,
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

type Story = StoryObj<typeof RadixButton>;

export const Button: Story = {
  args: {
    text: "submit",
    type: "primary",
    onClick: () => console.log("Button")
  }
};
