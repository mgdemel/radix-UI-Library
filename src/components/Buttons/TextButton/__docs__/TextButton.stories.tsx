import type { Meta, StoryObj } from "@storybook/react";
import { TextButton } from "../TextButton";
import { Theme } from "@/components/Theme";

const meta: Meta<typeof TextButton> = {
  title: "Components/Buttons",
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

export const Text: Story = {
  args: {
    text: "link",
    onClick: () => console.log("Button")
  }
};
