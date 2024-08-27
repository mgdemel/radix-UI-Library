import { Button, Theme } from "@/components";
import {
  ArrowBottomRightIcon,
  ArrowDownIcon,
  ArrowTopLeftIcon,
  ArrowUpIcon
} from "@radix-ui/react-icons";
import { Heading, IconButton, Text, TextArea } from "@radix-ui/themes";
import type { Meta, StoryObj } from "@storybook/react";
import { Modal as CustomModal, ModalContent, ModalTrigger } from "../Modal";

const meta: Meta<typeof CustomModal> = {
  title: "Modules",
  component: CustomModal,
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

type Story = StoryObj<typeof CustomModal>;

const tempStr = "clicked";

export const Modal: Story = {
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
          <Heading as="h2" size="6">
            modal heading
          </Heading>
          <Text> modal paragraph</Text>
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
