"use client";
import { Button } from "@/components";
import { Card, Tabs, Text } from "@radix-ui/themes";

export const AuthTabs = () => {
  const tempStr = "I am clicked!";

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
          <Text>Log into your account here.</Text>
          <div className="flex justify-end">
            <Button
              text="Login"
              type="primary"
              onClick={() => console.log(tempStr)}
            />
          </div>
        </Tabs.Content>
        <Tabs.Content value="register">
          <Text>Register your account here.</Text>
          <div className="flex justify-end">
            <Button
              text="Register"
              type="primary"
              onClick={() => console.log(tempStr)}
            />
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </Card>
  );
};
