import Link from "next/link";
import { ActiveLink } from "./ActiveLink";
import { Binoculars, Profile, SignIn, TrendingUp } from "./icons";

export function Sidebar() {
  return (
    <aside className="max-w-[232px] w-full h-[calc(100vh-40px)] bg-sidebar flex flex-col items-center rounded-xl">
      <img className="w-32 pt-10" src="/logo.svg" alt="BookWise logo" />

      <nav className="mt-16">
        <ul className="flex flex-col gap-4   w-[100px]">
          <li>
            <ActiveLink href="/">
              <TrendingUp className="w-6 h-6 fill-current" />
              Início
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/explore">
              <Binoculars className="w-6 h-6 fill-current" />
              Explorar
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/profile/teste">
              <Profile className="w-6 h-6 fill-current" />
              Perfil
            </ActiveLink>
          </li>
        </ul>
      </nav>

      <footer className="mt-auto mb-6">
        <Link
          href="/signin"
          className="flex items-center gap-3 text-gray-200 font-bold leading-base"
        >
          Fazer login
          <SignIn className="w-5 h-5 text-green-100 fill-current" />
        </Link>
      </footer>
    </aside>
  );
}
