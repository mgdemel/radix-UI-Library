import { Theme } from "@/components";
import { colors, detailSizes, variants } from "@/utils/radixArgOptions";
import { Badge as RadixBadge } from "@radix-ui/themes";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RadixBadge> = {
  title: "Components",
  component: RadixBadge,
  decorators: [
    (Story) => (
      <Theme>
        <Story />
      </Theme>
    )
  ],
  argTypes: {
    color: {
      control: "select",
      options: colors
    },
    size: {
      control: "radio",
      options: detailSizes
    },
    variant: {
      control: "select",
      options: variants
    }
  }
};
export default meta;

type Story = StoryObj<typeof RadixBadge>;

export const Badge: Story = {
  args: { children: "label" }
};
