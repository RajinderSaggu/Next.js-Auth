import NextAuth from "next-auth";
import { UserRole } from '@prisma/client';
import authConfig from "./auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { getUserById } from "./data/user";
import { db } from "@/lib/db";


export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
  callbacks: {
    async signIn({ user }) {
      const existingUser = await getUserById(user.id as string);
      if (existingUser && existingUser.emailVerified) {
        return false;
      }
      return true;
    },
    async session({ token, session }) {
      console.log({
        sessionToken: token,
      });

      // Assign user ID from token to session
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      // Assign user role from token to session
      if (token.role && session.user) {
        session.user.role = token.role as UserRole
      }

      return session;
    },
    async jwt({ token }) {
      // If token doesn't have a sub, return token as is
      if (!token.sub) return token;

      // Fetch existing user by ID
      const existingUser = await getUserById(token.sub);

      // If user doesn't exist, return token as is
      if (!existingUser) return token;

      // Assign role from user to token
      token.role = existingUser.role;

      return token; // Make sure to return the modified token
    },
  },
  adapter: PrismaAdapter(db), // Set the Prisma adapter for database interaction
  session: { strategy: "jwt" }, // Use JWT for session management
  ...authConfig, // Spread additional auth config options
});
