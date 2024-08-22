import { Theme } from "@/components";
import { Link } from "@radix-ui/themes";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Link> = {
  title: "Components/Buttons",
  component: Link,
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

type Story = StoryObj<typeof Link>;

export const link: Story = {
  args: {
    href: "#",
    children: "text link",
    onClick: () => console.log("Link")
  }
};
