import { Theme } from "@/components";
import {
  buttonSizes,
  colors,
  radiusOptions,
  variants
} from "@/utils/radixArgOptions";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { IconButton } from "@radix-ui/themes";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof IconButton> = {
  title: "Components/Buttons",
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
    color: {
      control: "select",
      options: colors
    },
    size: {
      control: "radio",
      options: buttonSizes
    },
    variant: {
      control: "select",
      options: variants
    },
    radius: {
      control: "select",
      options: radiusOptions
    }
  }
};
export default meta;

type Story = StoryObj<typeof IconButton>;

export const iconButton: Story = {
  args: {
    children: <ArrowRightIcon />
  }
};
