"use client";
import { ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

type ActiveLinkProps = {
  children: ReactNode;
} & LinkProps;

export function ActiveLink({ href, children, ...rest }: ActiveLinkProps) {
  const pathname = usePathname();
  const isCurrentPath = pathname === href;
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 leading-base ${
        isCurrentPath
          ? "font-bold before:content-['']  before:w-1 before:h-6 before:mr-1  before:ml-[-20px] before:bg-gradient-vertical before:rounded-full"
          : "text-gray-400"
      }`}
      {...rest}
    >
      {children}
    </Link>
  );
}
