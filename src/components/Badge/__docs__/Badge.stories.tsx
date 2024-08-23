import { Theme } from "@/components";
import { colors, detailSizes, variants } from "@/utils/radixArgOptions";
import { Badge } from "@radix-ui/themes";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
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

type Story = StoryObj<typeof Badge>;

export const badge: Story = {
  args: { children: "label" }
};
