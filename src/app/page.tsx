"use client";
import {
  Heading,
  Text,
  TextButton,
  Card,
  IconButton,
  TextInput,
  PrimaryButton,
  SecondaryButton
} from "@/components";
import {
  Accordion,
  AuthTabs,
  TabBar,
  TabBarItem,
  Modal,
  ModalContent,
  ModalTrigger
} from ".././modules";
import { CallToActionBanner } from ".././sections";
import {
  ArrowBottomRightIcon,
  ArrowDownIcon,
  ArrowTopLeftIcon,
  ArrowUpIcon
} from "@radix-ui/react-icons";

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
      <Modal>
        <ModalTrigger>
          <TextButton text="Open modal"></TextButton>
        </ModalTrigger>
        <ModalContent modalTitle="modal">
          <Heading level="h2" size="6" text="Card Heading" customStyles="p-2" />
          <Text text="Card paragraph" type="p" size="4" customStyles="p-2" />
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
        </ModalContent>
      </Modal>

      <AuthTabs />

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

      <div className="my-12 w-full">
        <Accordion items={accordionItems} />
      </div>
    </main>
  );
}
