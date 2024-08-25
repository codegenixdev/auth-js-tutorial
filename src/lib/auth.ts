import NextAuth from "next-auth";

import prisma from "@/lib/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "@/lib/auth.config";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
});
