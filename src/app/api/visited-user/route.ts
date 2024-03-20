import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

/**
 * GET request to fetch all visited users
 * @param req
 * @param res
 * @response { visitedUsers: VisitedUser[], items: number }
 */
export const GET = async (req: NextRequest, res: NextResponse) => {
  /**
   * Query all visited users from the database
   */
  const visitedUsers = await prisma.visitedUser.findMany();

  return NextResponse.json({ visitedUsers, items: visitedUsers.length });
}

/**
 * POST request to create a new visited user
 * @param req
 * @param res
 * @response { visitedUser: VisitedUser }
 */
export const POST = async (req: NextRequest, res: NextResponse) => {
  /**
   * Create a new visited user (needs no data, just an empty
   * object (id will be auto-generated, createdAt and updatedAt
   * will be set to the current date and time))
   */
  const newVisitedUser = await prisma.visitedUser.create({
    data: {}
  });

  return NextResponse.json(newVisitedUser);
}