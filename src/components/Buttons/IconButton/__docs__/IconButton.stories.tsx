import { Theme } from "@/components";
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon
} from "@radix-ui/react-icons";
import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "../IconButton";

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
    },
    onClick: {
      table: {
        disable: true
      }
    }
  }
};
export default meta;

type Story = StoryObj<typeof IconButton>;

const defaultArgs = {
  onClick: () => console.log("Button")
};

export const ArrowUpIconButton: Story = {
  args: {
    ...defaultArgs,
    children: <ArrowUpIcon />
  }
};

export const ArrowDownIconButton: Story = {
  args: {
    ...defaultArgs,
    children: <ArrowDownIcon />
  }
};

export const ArrowLeftIconButton: Story = {
  args: {
    ...defaultArgs,
    children: <ArrowLeftIcon />
  }
};

export const ArrowRightIconButton: Story = {
  args: {
    ...defaultArgs,
    children: <ArrowRightIcon />
  }
};
