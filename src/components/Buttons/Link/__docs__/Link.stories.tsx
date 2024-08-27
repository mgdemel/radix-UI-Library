import { Theme } from "@/components";
import { Link as RadixLink } from "@radix-ui/themes";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RadixLink> = {
  title: "Components/Buttons",
  component: RadixLink,
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

type Story = StoryObj<typeof RadixLink>;

export const Link: Story = {
  args: {
    href: "#",
    children: "text link",
    onClick: () => console.log("Link")
  }
};
