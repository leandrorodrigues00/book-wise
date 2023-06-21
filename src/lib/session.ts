import { cookies, headers } from "next/headers";
import { getServerSession } from "next-auth/next";

import { authOptions } from "@/lib/auth";

// export async function getCurrentUser() {
//   const session = await getServerSession(authOptions);

//   return session?.user;
// }

export async function getCurrentUser() {
  //  Workaround for issue: "Invariant: Method expects to have requestAsyncStorage, none available"
  //  @see:  https://github.com/nextauthjs/next-auth/issues/7523
  const req = {
    headers: Object.fromEntries(headers()),
    cookies: Object.fromEntries(
      cookies()
        .getAll()
        .map((c) => [c.name, c.value])
    ),
  } as any;
  const res = {
    getHeader() {
      /* empty */
    },
    setCookie() {
      /* empty */
    },
    setHeader() {
      /* empty */
    },
  } as any;

  const session = await getServerSession(req, res, authOptions);
  return session?.user;
}
