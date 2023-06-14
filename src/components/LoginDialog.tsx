"use client";

import type { ReactNode } from "react";
import { useRouter } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";

import { CloseIcon } from "@/components/icons";

interface LoginDialogProps {
  children: ReactNode;
}

export function LoginDialog({ children }: LoginDialogProps) {
  const router = useRouter();

  const handleOnOpenChange = (open: boolean) => {
    if (!open) {
      router.back();
    }
  };

  return (
    <Dialog.Root open onOpenChange={handleOnOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-[#00000099]" />

        <Dialog.Content className="fixed left-[50%] top-[50%]  w-full max-w-[516px] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-gray-700 px-[72px] py-14  focus:outline-none">
          <Dialog.Close asChild>
            <CloseIcon className="absolute right-5 top-5 h-6 w-6 cursor-pointer fill-current text-gray-400 hover:text-gray-300" />
          </Dialog.Close>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
