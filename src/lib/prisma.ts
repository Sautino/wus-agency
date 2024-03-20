import { PrismaClient } from '@prisma/client';

/**
 * Initialize Prisma Client
 */
export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL
    }
  }
});