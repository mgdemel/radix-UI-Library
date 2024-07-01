"use client";
import React from "react";
import { Card, PrimaryButton, Text } from "@/components";
import { Tabs } from "@radix-ui/themes";

export const AuthTabs = () => {
  return (
    <Card>
      <Tabs.Root className="flex flex-col" defaultValue="login">
        <Tabs.List
          color="crimson"
          highContrast
          wrap="nowrap"
          justify="center"
          aria-label="Login/Register"
          className="justify-between"
        >
          <Tabs.Trigger value="login">Login</Tabs.Trigger>
          <Tabs.Trigger value="register">Register</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="login">
          <Text content="Log into your account here." type="p" />
          <div className="flex justify-end">
            <PrimaryButton text="Login" />
          </div>
        </Tabs.Content>
        <Tabs.Content value="register">
          <Text content="Register here." type="p" />
          <div className="flex justify-end">
            <PrimaryButton text="Register" />
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </Card>
  );
};
