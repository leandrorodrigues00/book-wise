import { ReactNode, Suspense } from "react";

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
      {/*Temporary fix, parallel routes are breaking loading.tsx
       @see https://github.com/vercel/next.js/issues/49243
     */}
      <Suspense
        fallback={
          <div className="grid min-h-full w-full place-items-center   ">
            <div className="text-center">
              <p className="text-lg font-semibold text-gray-100">Loading...</p>
            </div>
          </div>
        }
      >
        {children}
      </Suspense>
      {ratingsModal}
      {loginModal}
    </>
  );
}
