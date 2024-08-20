import type { Meta, StoryObj } from "@storybook/react";
import { ArrowToggleIcon } from "../ArrowToggleIcon";
import { Theme } from "@/components/Theme";

const meta: Meta<typeof ArrowToggleIcon> = {
  title: "Interactive Icons",
  component: ArrowToggleIcon,
  decorators: [
    (Story) => (
      <Theme>
        <Story />
      </Theme>
    )
  ]
};
export default meta;

type Story = StoryObj<typeof ArrowToggleIcon>;

export const ArrowToggle: Story = {
  args: { isOpen: false }
};
