import Link from "next/link";

import { ActiveLink } from "./ActiveLink";
import { Binoculars, Profile, SignIn, TrendingUp } from "./icons";

export function Sidebar() {
  return (
    <aside className="flex h-[calc(100vh-40px)] w-full max-w-[232px] flex-col items-center rounded-xl bg-sidebar">
      <img className="w-32 pt-10" src="/logo.svg" alt="BookWise logo" />

      <nav className="mt-16">
        <ul className="flex w-[100px] flex-col   gap-4">
          <li>
            <ActiveLink href="/">
              <TrendingUp className="h-6 w-6 fill-current" />
              Início
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/explore">
              <Binoculars className="h-6 w-6 fill-current" />
              Explorar
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/profile/teste">
              <Profile className="h-6 w-6 fill-current" />
              Perfil
            </ActiveLink>
          </li>
        </ul>
      </nav>

      <footer className="mb-6 mt-auto">
        <Link
          href="/signin"
          className="flex items-center gap-3 font-bold leading-base text-gray-200"
        >
          Fazer login
          <SignIn className="h-5 w-5 fill-current text-green-100" />
        </Link>
      </footer>
    </aside>
  );
}
