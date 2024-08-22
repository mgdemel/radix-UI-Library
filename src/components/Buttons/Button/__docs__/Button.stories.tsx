import { Theme } from "@/components";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";

const meta: Meta<typeof Button> = {
  title: "Components/Buttons",
  component: Button,
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

type Story = StoryObj<typeof Button>;

export const button: Story = {
  args: {
    text: "submit",
    type: "primary",
    onClick: () => console.log("Button")
  }
};
