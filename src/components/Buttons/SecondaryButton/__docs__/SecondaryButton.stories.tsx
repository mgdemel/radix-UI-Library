import type { Meta, StoryObj } from "@storybook/react";
import { SecondaryButton } from "../SecondaryButton";
import { Theme } from "@/components/Theme";

const meta: Meta<typeof SecondaryButton> = {
  title: "Components/Buttons",
  component: SecondaryButton,
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

type Story = StoryObj<typeof SecondaryButton>;

export const Secondary: Story = {
  args: {
    text: "submit",
    onClick: () => console.log("Button")
  }
};
