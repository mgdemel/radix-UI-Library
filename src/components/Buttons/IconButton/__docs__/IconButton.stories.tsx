import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "../IconButton";
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon
} from "@radix-ui/react-icons";
import { Theme } from "@/components/Theme";

const meta: Meta<typeof IconButton> = {
  title: "IconButton",
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

export const ArrowUp: Story = {
  args: {
    ...defaultArgs,
    children: <ArrowUpIcon />
  }
};

export const ArrowDown: Story = {
  args: {
    ...defaultArgs,
    children: <ArrowDownIcon />
  }
};

export const ArrowLeft: Story = {
  args: {
    ...defaultArgs,
    children: <ArrowLeftIcon />
  }
};

export const ArrowRight: Story = {
  args: {
    ...defaultArgs,
    children: <ArrowRightIcon />
  }
};
