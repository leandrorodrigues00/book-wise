"use client";
import { signIn } from "next-auth/react";
import {
  Github,
  Google,
  RocketLauch,
} from "@/components/shared-components/icons";

export function SignInButtons() {
  return (
    <div className="flex flex-col gap-4">
      <button
        className="flex w-full items-center gap-5 rounded-lg bg-gray-600 px-6 py-5 duration-300 hover:bg-gray-500"
        onClick={() => signIn("google")}
      >
        <Google className="h-8 w-8" />
        <span className="text-lg font-bold leading-base text-gray-200">
          Entrar com Google
        </span>
      </button>
      <button
        className="flex w-full items-center gap-5 rounded-lg bg-gray-600 px-6 py-5 duration-300 hover:bg-gray-500"
        onClick={() => signIn("github")}
      >
        <Github className="h-8 w-8 fill-current text-white" />
        <span className="text-lg font-bold leading-base text-gray-200">
          Entrar com GitHub
        </span>
      </button>
      <button className="flex w-full items-center gap-5 rounded-lg bg-gray-600 px-6 py-5 duration-300 hover:bg-gray-500">
        <RocketLauch className="h-8 w-8 fill-current text-purple-100" />
        <span className="text-lg font-bold leading-base text-gray-200">
          Acessar como visitante
        </span>
      </button>
    </div>
  );
}
