import { Theme } from "@/components";
import {
  buttonSizes,
  colors,
  radiusOptions,
  variants
} from "@/utils/radixArgOptions";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { IconButton as RadixIconButton } from "@radix-ui/themes";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RadixIconButton> = {
  title: "Components/Buttons",
  component: RadixIconButton,
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

type Story = StoryObj<typeof RadixIconButton>;

export const IconButton: Story = {
  args: {
    children: <ArrowRightIcon />
  }
};
