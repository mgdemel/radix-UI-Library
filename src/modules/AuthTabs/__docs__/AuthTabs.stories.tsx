import { Theme } from "@/components";
import type { Meta, StoryObj } from "@storybook/react";
import { AuthTabs } from "../AuthTabs";

const meta: Meta<typeof AuthTabs> = {
  title: "Modules/AuthTabs",
  component: AuthTabs,
  decorators: [
    (Story) => (
      <Theme>
        <Story />
      </Theme>
    )
  ],
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
};
export default meta;

type Story = StoryObj<typeof AuthTabs>;

export const authTabs: Story = {
  args: {}
};
