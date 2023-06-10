import { NextAuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";
import GitHubProvider, { GithubProfile } from "next-auth/providers/github";

import prisma from "@/lib/prisma";
import { PrismaAdapter } from "./prismaAdapter";

export const authOptions: NextAuthOptions = {
  // This is a temporary fix for prisma client. @see: ./prismaAdapter.ts
  adapter: PrismaAdapter(prisma) as unknown as Adapter,

  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string,
      profile(profile: GoogleProfile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        };
      },
    }),

    GitHubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET as string,
      profile(profile: GithubProfile) {
        return {
          id: profile.id.toString(),
          name: profile.name || profile.login,
          email: profile.email,
          image: profile.avatar_url,
        };
      },
    }),
  ],
};
