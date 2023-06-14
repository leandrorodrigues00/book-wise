import Link from "next/link";

import { AuthButtons } from "@/components/AuthButtons";
import { RocketLauch } from "@/components/icons";

export default async function Signin() {
  return (
    <div className="flex min-h-screen gap-3 p-5">
      <section className="flex w-full max-w-[598px] items-center justify-center rounded-xl bg-login-page p-3">
        <img src="/logo.svg" alt="BookWise logo" />
      </section>

      <section className="flex min-w-[400px] flex-1 items-center justify-center">
        <div className="w-full max-w-[372px]">
          <div className="mb-10 flex flex-col gap-[2px]">
            <p className="text-2xl font-bold leading-short text-gray-100">
              Boas vindas!
            </p>
            <p className="leading-base text-gray-200">
              Faça seu login ou acesse como visitante.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <AuthButtons />

            <Link
              href={"/"}
              className="flex w-full items-center gap-5 rounded-lg bg-gray-600 px-6 py-5 duration-300 hover:bg-gray-500"
            >
              <RocketLauch className="h-8 w-8 fill-current text-purple-100" />
              <span className="text-lg font-bold leading-base text-gray-200">
                Acessar como visitante
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
