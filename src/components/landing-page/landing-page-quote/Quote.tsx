'use client';

import { SetStateAction, useEffect, useRef, useState } from 'react';
import LandingPageNewQuote from './landing-page-new-quote/LandingPageNewQuote';
import LoadingSpinner from '@/components/shared/loading-spinner/LoadingSpinner';

export default function LandingPageQuote() {

  /**
   * Prevent the function from being executed twice during initial loading.
   */
  const executedRef = useRef(false);

  const [quote, setQuote] = useState('');
  const [initialLoad, setInitialLoad] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Fetch new quote from the api if 'New Quote' button
   * in child-component was clicked
   */
  const changeQuote = async (): Promise<void> => {
    setIsLoading(true);

    await loadQuote(setIsLoading);
  }

  /**
   * Fetch initial quote from api
   */
  useEffect(() => {
    const loadInitialQuote = async () => {
      if (!executedRef.current) {
        executedRef.current = true;
        await loadQuote(setInitialLoad);
      }
    }

    loadInitialQuote();
  });

  /**
   * Call the api to fetch an quote
   * @param setLoading
   */
  const loadQuote = async (setLoading: (value: SetStateAction<boolean>) => void) => {
    try {
      const res = await fetch(`/api/quote`, {
        method: 'POST'
      });
      const quote = await res.json();

      setQuote(quote.value);
    } catch (error) {
      console.error('Error')
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex-1 flex flex-col gap-8">
      {initialLoad ? (
        <div className="flex justify-center">
          <div className="h-12 ">
            <LoadingSpinner />
          </div>
        </div>
      ) : (
        <div>
          <div className="flex flex-col gap-7">
            <p className="lg:text-5xl text-2xl font-bold">{quote}</p>
            <span className="italic">- Chuck Norris</span>
          </div>

          <LandingPageNewQuote loading={isLoading} quote={quote} changeQuote={changeQuote} />
        </div>
      )}
    </div>
  );
}