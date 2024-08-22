import { Theme } from "@/components";
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon
} from "@radix-ui/react-icons";
import { IconButton } from "@radix-ui/themes";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof IconButton> = {
  title: "Components/Buttons/Icon Buttons",
  component: IconButton,
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

type Story = StoryObj<typeof IconButton>;

export const ArrowUpIconButton: Story = {
  args: {
    children: <ArrowUpIcon />
  }
};

export const ArrowDownIconButton: Story = {
  args: {
    children: <ArrowDownIcon />
  }
};

export const ArrowLeftIconButton: Story = {
  args: {
    children: <ArrowLeftIcon />
  }
};

export const ArrowRightIconButton: Story = {
  args: {
    children: <ArrowRightIcon />
  }
};
