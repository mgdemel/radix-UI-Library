import { Theme } from "@/components";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross1Icon } from "@radix-ui/react-icons";
import { VisuallyHidden } from "@radix-ui/themes";
import React from "react";

type Props = {
  modalTitle: string;
  children: React.ReactNode;
};

export const ModalContent = ({ modalTitle, children }: Props) => {
  return (
    <Dialog.Portal>
      <Theme>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-8">
          <VisuallyHidden asChild>
            <Dialog.Title>{modalTitle}</Dialog.Title>
          </VisuallyHidden>
          <Dialog.Close aria-label="Close">
            <Cross1Icon />
          </Dialog.Close>
          {children}
        </Dialog.Content>
      </Theme>
    </Dialog.Portal>
  );
};

export const Modal = Dialog.Root;
export const ModalTrigger = Dialog.Trigger;
