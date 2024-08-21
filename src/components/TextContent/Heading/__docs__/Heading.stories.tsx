import { Theme } from "@/components";
import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "../Heading";

const meta: Meta<typeof Heading> = {
  title: "Components/Text Content",
  component: Heading,
  decorators: [
    (Story) => (
      <Theme>
        <Story />
      </Theme>
    )
  ]
};
export default meta;

type Story = StoryObj<typeof Heading>;

export const heading: Story = {
  args: { text: "here is a heading", level: "h1", size: "9" }
};
