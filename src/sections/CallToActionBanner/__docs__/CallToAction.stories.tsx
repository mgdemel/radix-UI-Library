import { Theme } from "@/components";
import type { Meta, StoryObj } from "@storybook/react";
import { CallToActionBanner } from "../CallToActionBanner";

const meta: Meta<typeof CallToActionBanner> = {
  title: "Sections/CallToActionBanner",
  component: CallToActionBanner,
  decorators: [
    (Story) => (
      <Theme>
        <Story />
      </Theme>
    )
  ]
};
export default meta;

type Story = StoryObj<typeof CallToActionBanner>;

export const callToActionBanner: Story = {
  args: {}
};
