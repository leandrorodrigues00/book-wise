"use client";

import { useEffect } from "react";
import Link from "next/link";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
 
  return (
    <div className="grid min-h-full w-full place-items-center   ">
      <div className="text-center">
        <p className="text-lg font-semibold text-emerald-300">
          Oops! we encountered a problem.
        </p>

        <h1 className="mt-4 text-3xl font-bold tracking-tighter text-zinc-50">
          {error.message || "Something went wrong!"}
        </h1>
        <p className="mt-6 text-base leading-7 text-zinc-400">
          Please try again later or contact{" "}
          <a
            className="underline hover:text-gray-200 "
            href="https://github.com/leandrorodrigues00"
          >
            support
          </a>{" "}
          if the problema persists.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            className="rounded border border-emerald-300 bg-emerald-300/10 px-4 py-2 text-emerald-300"
            onClick={() => reset()}
          >
            Try again
          </button>
          <Link href="/" className="rounded border border-gray-100 px-4 py-2">
            Go back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
