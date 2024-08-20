import type { Meta, StoryObj } from "@storybook/react";
import { TextButton } from "../TextButton";
import { Theme } from "@radix-ui/themes";
import React from "react";

const meta: Meta<typeof TextButton> = {
  title: "TextButton",
  component: TextButton,
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

type Story = StoryObj<typeof TextButton>;

export const Button: Story = {
  args: {
    text: "link",
    onClick: () => console.log("Button")
  }
};
