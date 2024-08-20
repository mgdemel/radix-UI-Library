import type { Meta, StoryObj } from "@storybook/react";
import { ToggleButton } from "../ToggleButton";
import {
  TextAlignCenterIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon
} from "@radix-ui/react-icons";
import { Theme } from "@/components/Theme";

const meta: Meta<typeof ToggleButton> = {
  title: "ToggleButton",
  component: ToggleButton,
  decorators: [
    (Story) => (
      <Theme>
        <Story />
      </Theme>
    )
  ],
  argTypes: {}
};
export default meta;

type Story = StoryObj<typeof ToggleButton>;

export const AlignLeft: Story = {
  args: {
    children: <TextAlignLeftIcon />
  }
};

export const AlignCenter: Story = {
  args: {
    children: <TextAlignCenterIcon />
  }
};

export const AlignRight: Story = {
  args: {
    children: <TextAlignRightIcon />
  }
};
