"use client";

import type { ReactNode } from "react";
import { useRouter } from "next/navigation";

import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog";

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
    <Dialog open onOpenChange={handleOnOpenChange}>
      <DialogContent className="right-0 top-0 h-full max-w-[660px] overflow-y-auto bg-gray-800 px-12 pt-6 animate-in duration-300 data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-right">
        <DialogClose className="static mb-4 ml-auto" />
        {children}
      </DialogContent>
    </Dialog>
  );
}
