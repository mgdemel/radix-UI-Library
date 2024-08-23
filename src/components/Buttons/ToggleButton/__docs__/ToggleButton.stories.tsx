import { Theme, toggleButton } from "@/components";
import { toggleVariants } from "@/utils/radixArgOptions";
import { TextAlignLeftIcon } from "@radix-ui/react-icons";
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
    variant: {
      control: "radio",
      options: toggleVariants
    }
  }
};
export default meta;

type Story = StoryObj<typeof IconButton>;

export const ToggleButton: Story = {
  args: {
    children: <TextAlignLeftIcon />,
    variant: toggleButton(true)
  }
};
