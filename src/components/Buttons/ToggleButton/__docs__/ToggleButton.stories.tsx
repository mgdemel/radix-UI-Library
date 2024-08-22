import { Theme } from "@/components";
import {
  TextAlignCenterIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon
} from "@radix-ui/react-icons";
import type { Meta, StoryObj } from "@storybook/react";
import { ToggleButton } from "../ToggleButton";

const meta: Meta<typeof ToggleButton> = {
  title: "Components/Buttons/Toggle Buttons",
  component: ToggleButton,

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

type Story = StoryObj<typeof ToggleButton>;

export const AlignLeftToggle: Story = {
  args: {
    children: <TextAlignLeftIcon />
  }
};

export const AlignCenterToggle: Story = {
  args: {
    children: <TextAlignCenterIcon />
  }
};

export const AlignRightToggle: Story = {
  args: {
    children: <TextAlignRightIcon />
  }
};
