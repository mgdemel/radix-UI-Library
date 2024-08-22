"use client";
import { Button } from "@/components";
import { Card, Text } from "@radix-ui/themes";
import { TabBar, TabBarItem } from "../TabBar";

export const AuthTabs = () => {
  const tempStr = "I am clicked!";

  return (
    <Card className="w-1/3">
      <TabBar defaultValue="Login" label="login/register">
        <TabBarItem value="Login">
          <Text>Log into your account here.</Text>
          <div className="flex justify-end">
            <Button
              text="Login"
              type="primary"
              onClick={() => console.log(tempStr)}
            />
          </div>
        </TabBarItem>
        <TabBarItem value="Register">
          <Text>Register here.</Text>
          <div className="flex justify-end">
            <Button
              text="Register"
              type="primary"
              onClick={() => console.log(tempStr)}
            />
          </div>
        </TabBarItem>
      </TabBar>
    </Card>
  );
};
