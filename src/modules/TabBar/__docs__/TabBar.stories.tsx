import { Theme } from "@/components";
import { Text } from "@radix-ui/themes";
import type { Meta, StoryObj } from "@storybook/react";
import { TabBar as CustomTabBar } from "../TabBar";
import { TabBarItem } from "../TabBarItem";

const meta: Meta<typeof CustomTabBar> = {
  title: "Modules",
  component: CustomTabBar,
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

type Story = StoryObj<typeof CustomTabBar>;

export const TabBar: Story = {
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
