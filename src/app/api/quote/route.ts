import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

/**
 * This is the route for the quote API to fetch dev quotes
 */
const quoteApiUrl = `${process.env.QUOTE_API_URL}/jokes/random?category=dev`;

/**
 * GET request to fetch a random dev quote and save it to the database
 * @param req
 * @param res
 * @response { quote: Quote }
 */
export async function POST(req: NextRequest, res: NextResponse) {
  /**
   * Fetch a random dev quote from the quote API
   */
  const response = await fetch(quoteApiUrl);
  const quote = await response.json();

  /**
   * Save the new quote to the database to use it in the future for example
   * quote history or to show the last quote on the website
   */
  const newQuote = await prisma.quote.create({
    data: {
      quoteId: quote.id,
      quoteCreatedAt: new Date(quote.created_at),
      value: quote.value,
      url: quote.url,
      categories: quote.categories
    }
  });

  return NextResponse.json(newQuote);
}