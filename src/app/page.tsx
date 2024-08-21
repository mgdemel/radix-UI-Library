"use client";
import { Text } from "@/components";
import { TabBar, TabBarItem } from "@/modules";
import { CallToActionBanner } from "@/sections";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-full">
      <div className="my-12 w-1/3">
        <TabBar label="tab bar">
          <TabBarItem value="tab 1">
            <Text text="Here is a paragraph in tab 1" type="p" />
          </TabBarItem>
          <TabBarItem value="tab 2">
            <Text text="Here is a paragraph in tab 2" type="p" />
          </TabBarItem>
          <TabBarItem value="tab 3">
            <Text text="Here is a paragraph in tab 3" type="p" />
          </TabBarItem>
        </TabBar>
      </div>

      <div className="my-12 w-full">
        <CallToActionBanner />
      </div>
    </main>
  );
}
