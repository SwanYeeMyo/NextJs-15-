import { db } from "@/server";
import NextAuth from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  secret: process.env.BETTER_AUTH_SECRET,
  session: { strategy: "jwt" },
  providers: [Google, Github],
});
