"use client";
import { signOut } from "next-auth/react";
import { SignOut } from "./icons";

export function SignOutButton() {
  return (
    <button onClick={() => signOut()}>
      <SignOut className="h-5 w-5 fill-current text-[#F75A68]" />
    </button>
  );
}
