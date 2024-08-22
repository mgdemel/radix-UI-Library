import { Theme } from "@/components";
import { Text } from "@radix-ui/themes";
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
          <Text> Here is a paragraph in tab 1</Text>
        </TabBarItem>
        <TabBarItem value="tab 2">
          <Text> Here is a paragraph in tab 2</Text>
        </TabBarItem>
        <TabBarItem value="tab 3">
          <Text> Here is a paragraph in tab 3</Text>
        </TabBarItem>
      </>
    )
  }
};
