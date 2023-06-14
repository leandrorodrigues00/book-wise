import Link from "next/link";

import { getCurrentUser } from "@/lib/session";

import { ActiveLink } from "./ActiveLink";
import { Avatar } from "./Avatar";
import { Binoculars, Profile, SignIn, TrendingUp } from "./icons";
import { SignOutButton } from "./SignOutButton";

export async function Sidebar() {
  const user = await getCurrentUser();

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
          {user && (
            <li>
              <ActiveLink href="/profile/teste">
                <Profile className="h-6 w-6 fill-current" />
                Perfil
              </ActiveLink>
            </li>
          )}
        </ul>
      </nav>

      <footer className="mb-6 mt-auto">
        {user ? (
          <div className="flex items-center space-x-3">
            <Avatar
              size="sm"
              src={user.image || ""}
              alt={`Profile photo of ${user.name}`}
            />
            <p>{user.name?.split(" ")[0]}</p>
            <SignOutButton />
          </div>
        ) : (
          <Link
            href="/signin"
            className="flex items-center gap-3 font-bold leading-base text-gray-200"
          >
            Fazer login
            <SignIn className="h-5 w-5 fill-current text-green-100" />
          </Link>
        )}
      </footer>
    </aside>
  );
}
