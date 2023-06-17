"use client";

import { ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/utils/tailwind-classnames";

type ActiveLinkProps = {
  children: ReactNode;
} & LinkProps;

export function ActiveLink({ href, children, ...rest }: ActiveLinkProps) {
  const pathname = usePathname();

  const isCurrentPath =
    pathname === href ||
    (pathname.startsWith("/profile") && href.toString().startsWith("/profile"));

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 leading-base",
        isCurrentPath
          ? "font-bold before:ml-[-20px] before:mr-1 before:h-6 before:w-1 before:rounded-full  before:bg-gradient-vertical before:content-['']"
          : "text-gray-400"
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}
