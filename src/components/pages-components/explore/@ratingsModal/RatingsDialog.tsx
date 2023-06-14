"use client";

import type { ReactNode } from "react";
import { useRouter } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";

import { CloseIcon } from "@/components/shared-components/icons";

interface RatingsDialogProps {
  children: ReactNode;
}

export function RatingsDialog({ children }: RatingsDialogProps) {
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

        <Dialog.Content className="fixed right-0 top-0 h-full w-[660px] overflow-y-auto bg-gray-800 px-12 pt-6">
          <Dialog.Close asChild>
            <CloseIcon className="mb-4 ml-auto h-6 w-6 cursor-pointer fill-current text-gray-400 hover:text-gray-300" />
          </Dialog.Close>

          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
