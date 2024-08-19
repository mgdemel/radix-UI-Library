"use client";
import {
  Heading,
  Blockquote,
  Text,
  TextButton,
  Checkbox,
  Radio,
  Icon,
  Chip,
  Card,
  IconButton,
  TextInput,
  PrimaryButton,
  SecondaryButton
} from "@/components";
import { Accordion, AuthTabs, TabBar } from ".././modules";
import { CallToActionBanner } from ".././sections";
import {
  ArrowBottomRightIcon,
  ArrowDownIcon,
  ArrowTopLeftIcon,
  ArrowUpIcon
} from "@radix-ui/react-icons";
import { TabItem } from "@/modules/TabBar/TabBarItem";

export default function Home() {
  const accordionItems = [
    {
      id: "item 1",
      header: "Item 1",
      content: "Here is the content hiding in item 1"
    },
    {
      id: "item 2",
      header: "Item 2",
      content: "Here is the content hiding in item 2"
    },
    {
      id: "item 3",
      header: "Item 3",
      content: "Here is the content hiding in item 3"
    }
  ];

  const tempStr = "I am clicked!";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-full">
      <header className="p-4 w-full mb-12">
        <Heading level="h1" size="8" text="Page heading" />
        <nav className="mt-2">
          <TextButton
            text="Home"
            customStyles="text-lg font-medium hover:underline"
            onClick={() => console.log(tempStr)}
          />
          <TextButton
            text="About"
            customStyles="text-lg font-medium hover:underline"
            onClick={() => console.log(tempStr)}
          />
          <TextButton
            text="Contact"
            customStyles="text-lg font-medium hover:underline"
            onClick={() => console.log(tempStr)}
          />
        </nav>
      </header>

      <AuthTabs />

      <Card>
        <TabBar label="tab bar">
          <TabItem value="tab 1">
            <Text content="Here is a paragraph in tab 1" type="p" />
          </TabItem>
          <TabItem value="tab 2">
            <Text content="Here is a paragraph in tab 2" type="p" />
          </TabItem>
          <TabItem value="tab 3">
            <Text content="Here is a paragraph in tab 3" type="p" />
          </TabItem>
        </TabBar>
      </Card>

      <Blockquote
        size="5"
        weight="medium"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac felis non leo fringilla volutpat. Duis sed leo et sem auctor rhoncus. Curabitur pellentesque urna nec tortor iaculis dignissim."
      />

      <div className="my-12">
        <Card>
          <Heading level="h2" size="6" text="Card Heading" customStyles="p-2" />
          <Text content="Card paragraph" type="p" size="4" customStyles="p-2" />
          <div className="flex justify-between px-2 py-4">
            <IconButton size="3" onClick={() => console.log(tempStr)}>
              <ArrowUpIcon />
            </IconButton>
            <IconButton size="3" onClick={() => console.log(tempStr)}>
              <ArrowTopLeftIcon />
            </IconButton>
            <IconButton size="3" onClick={() => console.log(tempStr)}>
              <ArrowBottomRightIcon />
            </IconButton>
            <IconButton size="3" onClick={() => console.log(tempStr)}>
              <ArrowDownIcon />
            </IconButton>
          </div>
          <div className="px-2 pb-4">
            <TextInput placeholder="tell us a bit more..." />
          </div>
          <div className="flex flex-row justify-between p-2">
            <PrimaryButton
              size="3"
              text="submit"
              onClick={() => console.log(tempStr)}
            />
            <SecondaryButton
              size="3"
              text="cancel"
              onClick={() => console.log(tempStr)}
            />
          </div>
        </Card>
      </div>
      <div className="my-12 w-full">
        <CallToActionBanner />
      </div>
      <div className="my-12 w-full">
        <Accordion items={accordionItems} />
      </div>

      <Checkbox size="3" label="Agree to Terms and Conditions" />

      <Radio value="1" size="3" label="Option 1" />
      <Radio value="2" size="3" label="Option 2" />
      <Radio value="3" size="3" label="Option 3" />

      <Icon label="Arrow pointing to bottom right icon">
        <ArrowBottomRightIcon />
      </Icon>

      <div className="flex flex-row justify-between gap-2">
        <Chip label="tag1" size="2" color="pink" />
        <Chip label="tag2" size="2" color="purple" />
        <Chip label="tag3" size="2" color="plum" />
        <Chip label="tag4" size="2" color="violet" />
      </div>

      <footer className="p-4 text-center w-full">
        <Text type="p" content="© 2024 copyright." size="1" />
        <nav className="mt-2">
          <TextButton
            text="Privacy Policy"
            customStyles="text-sm mr-4 hover:underline"
            onClick={() => console.log(tempStr)}
          />
          <TextButton
            text="Terms of Service"
            customStyles="text-sm mr-4 hover:underline"
            onClick={() => console.log(tempStr)}
          />
        </nav>
      </footer>
    </main>
  );
}
