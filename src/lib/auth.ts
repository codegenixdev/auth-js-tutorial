import NextAuth, { type DefaultSession } from "next-auth";

import authConfig from "@/lib/auth.config";
import prisma from "@/lib/db";
import { PrismaAdapter } from "@auth/prisma-adapter";

declare module "next-auth" {
  interface User {
    givenName?: string | null;
    preferLanguage?: string | null;
  }
}

declare module "@auth/core/adapters" {
  interface AdapterUser {
    givenName: string | null;
    preferLanguage: string | null;
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },

  callbacks: {
    session({ session }) {
      return {
        ...session,
        user: {
          ...session.user,
        },
      };
    },
  },
  ...authConfig,
});
