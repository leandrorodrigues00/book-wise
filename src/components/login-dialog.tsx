"use client";

import type { ReactNode } from "react";
import { useRouter } from "next/navigation";

import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog";

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
    <Dialog open onOpenChange={handleOnOpenChange}>
      <DialogContent className="max-w-[516px]">
        <DialogClose />
        {children}
      </DialogContent>
    </Dialog>
  );
}
