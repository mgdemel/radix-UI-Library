import { Theme } from "@/components";
import type { Meta, StoryObj } from "@storybook/react";
import { CallToActionBanner as CustomCTA } from "../CallToActionBanner";

const meta: Meta<typeof CustomCTA> = {
  title: "Sections",
  component: CustomCTA,
  decorators: [
    (Story) => (
      <Theme>
        <Story />
      </Theme>
    )
  ]
};
export default meta;

type Story = StoryObj<typeof CustomCTA>;

export const CallToActionBanner: Story = {
  args: {}
};
