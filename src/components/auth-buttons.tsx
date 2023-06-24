"use client";

import { signIn } from "next-auth/react";

import { Github, Google } from "@/components/icons";

export function AuthButtons() {
  return (
    <>
      <button
        className="flex w-full items-center gap-5 rounded-lg bg-gray-600 px-6 py-5 duration-300 hover:bg-gray-500"
        onClick={() => signIn("google")}
      >
        <Google className="h-8 w-8" />
        <span className="text-lg font-bold leading-base">
          Sign in with Google
        </span>
      </button>
      <button
        className="flex w-full items-center gap-5 rounded-lg bg-gray-600 px-6 py-5 duration-300 hover:bg-gray-500"
        onClick={() => signIn("github")}
      >
        <Github className="h-8 w-8 fill-current text-white" />
        <span className="text-lg font-bold leading-base">
          Sign in with GitHub
        </span>
      </button>
    </>
  );
}
