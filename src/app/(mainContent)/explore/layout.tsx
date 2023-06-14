import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  ratingsModal: ReactNode;
  loginModal: ReactNode;
}

export default function Layout({
  children,
  ratingsModal,
  loginModal,
}: LayoutProps) {
  return (
    <>
      {children}
      {ratingsModal}
      {loginModal}
    </>
  );
}
