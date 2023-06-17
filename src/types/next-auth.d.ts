import { User } from "next-auth";

type UserId = string;

declare module "next-auth" {
  interface Session {
    user: User & {
      id: string;
      emailVerified: null | boolean;
      created_at: Date;
    };
  }
}
