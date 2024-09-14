import { PrismaClient } from "@prisma/client";

declare global {
  // Allows the prisma variable to be global and persist across HMR without reinitializing.
  var prisma: PrismaClient | undefined;
}

// Initialize Prisma Client
export const db = globalThis.prisma || new PrismaClient();

// In development, attach Prisma to the `globalThis` object to avoid re-initialization.
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
