"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";

import { Form } from "@/components/shared-components/Form";
import { MagnifyingGlass } from "@/components/shared-components/icons";

export function BookSearchInput() {
  const router = useRouter();

  let timerId: NodeJS.Timeout | null = null;

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;

    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      router.push(`/explore?search=${value}`);
    }, 300);
  }
  return (
    <Form.Input
      name="livro"
      placeholder="Buscar Livro ou autor"
      onChange={handleInputChange}
      icon={
        <MagnifyingGlass className="h-5 w-5 fill-current text-gray-500 group-focus-within:text-green-200" />
      }
      className="group flex w-full max-w-[433px] rounded border border-gray-500 bg-gray-800 px-5 py-3 text-sm leading-base focus-within:border-green-200"
    />
  );
}
