import { Text, Theme } from "@/components";
import type { Meta, StoryObj } from "@storybook/react";
import { TabBar } from "../TabBar";
import { TabBarItem } from "../TabBarItem";

const meta: Meta<typeof TabBar> = {
  title: "Modules/TabBar",
  component: TabBar,
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
    childValues: {
      table: {
        disable: true
      }
    }
  }
};
export default meta;

type Story = StoryObj<typeof TabBar>;

export const tabBar: Story = {
  args: {
    label: "TabBar label",
    defaultValue: "tab 1",
    childValues: ["tab 1", "tab 2", "tab 3"],
    children: (
      <>
        <TabBarItem value="tab 1">
          <Text text="Here is a paragraph in tab 1" type="p" />
        </TabBarItem>
        <TabBarItem value="tab 2">
          <Text text="Here is a paragraph in tab 2" type="p" />
        </TabBarItem>
        <TabBarItem value="tab 3">
          <Text text="Here is a paragraph in tab 3" type="p" />
        </TabBarItem>
      </>
    )
  }
};
