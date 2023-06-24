import Link from "next/link";

import { getCurrentUser } from "@/lib/session";
import { ActiveLink } from "@/components/ui/active-link";
import { Binoculars, Profile, SignIn, TrendingUp } from "@/components/icons";
import { SignOutButton } from "@/components/signout-button";
import { UserAvatar } from "@/components/user-avatar";

export async function Sidebar() {
  const user = await getCurrentUser();

  return (
    <aside className="hidden h-[calc(100vh-40px)] w-full max-w-[232px] flex-col items-center rounded-xl bg-sidebar xl:flex ">
      <img className="w-32 pt-10" src="/logo.svg" alt="BookWise logo" />

      <nav className="mt-16">
        <ul className="flex w-[100px] flex-col   gap-4">
          <li>
            <ActiveLink href="/">
              <TrendingUp className="h-6 w-6 fill-current" />
              Home
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/explore">
              <Binoculars className="h-6 w-6 fill-current" />
              Explore
            </ActiveLink>
          </li>
          {user && (
            <li>
              <ActiveLink href={`/profile/${user.id}`}>
                <Profile className="h-6 w-6 fill-current" />
                Profile
              </ActiveLink>
            </li>
          )}
        </ul>
      </nav>

      <footer className="mb-6 mt-auto">
        {user ? (
          <div className="flex items-center space-x-3">
            <UserAvatar
              user={{
                name: user.name || null,
                image: user.image || null,
                id: user.id,
              }}
              className="h-8 w-8"
            />

            <p>{user.name?.split(" ")[0]}</p>
            <SignOutButton />
          </div>
        ) : (
          <Link
            href="/signin"
            className="flex items-center gap-3 font-bold leading-base"
          >
            Sign in
            <SignIn className="h-5 w-5 fill-current text-green-100" />
          </Link>
        )}
      </footer>
    </aside>
  );
}
