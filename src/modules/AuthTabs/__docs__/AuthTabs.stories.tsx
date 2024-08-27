import { Theme } from "@/components";
import type { Meta, StoryObj } from "@storybook/react";
import { AuthTabs as CustomAuthTabs } from "../AuthTabs";

const meta: Meta<typeof CustomAuthTabs> = {
  title: "Modules",
  component: CustomAuthTabs,
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

type Story = StoryObj<typeof CustomAuthTabs>;

export const AuthTabs: Story = {
  args: {}
};
