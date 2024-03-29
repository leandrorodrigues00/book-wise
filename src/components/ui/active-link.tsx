"use client";

import { ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

type ActiveLinkProps = {
  children: ReactNode;
} & LinkProps;

export function ActiveLink({ href, children, ...rest }: ActiveLinkProps) {
  const pathname = usePathname();

  const isCurrentPath =
    pathname === href ||
    (pathname.startsWith("/profile") &&
      href.toString().startsWith("/profile")) ||
    (pathname.startsWith("/explore") && href.toString().startsWith("/explore"));

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 leading-base",
        isCurrentPath
          ? "font-bold before:ml-[-20px] before:mr-1 before:h-6 before:w-1 before:rounded-full  before:bg-gradient-vertical before:content-['']"
          : "text-gray-400 transition hover:text-gray-300"
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}
