import { Button, Heading, Text, Theme } from "@/components";
import {
  ArrowBottomRightIcon,
  ArrowDownIcon,
  ArrowTopLeftIcon,
  ArrowUpIcon
} from "@radix-ui/react-icons";
import { IconButton, TextArea } from "@radix-ui/themes";
import type { Meta, StoryObj } from "@storybook/react";
import { Modal, ModalContent, ModalTrigger } from "../Modal";

const meta: Meta<typeof Modal> = {
  title: "Modules/Modal",
  component: Modal,
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
    }
  }
};
export default meta;

type Story = StoryObj<typeof Modal>;

const tempStr = "clicked";

export const modal: Story = {
  args: {
    children: (
      <>
        <ModalTrigger>
          <Button
            text="Open modal"
            type="outline"
            onClick={() => console.log(tempStr)}
          />
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
            <TextArea placeholder="tell us a bit more..." />
          </div>
          <div className="flex flex-row justify-between p-2">
            <Button
              size="3"
              text="submit"
              type="primary"
              onClick={() => console.log(tempStr)}
            />
            <Button
              size="3"
              text="cancel"
              type="secondary"
              onClick={() => console.log(tempStr)}
            />
          </div>
        </ModalContent>
      </>
    )
  }
};
