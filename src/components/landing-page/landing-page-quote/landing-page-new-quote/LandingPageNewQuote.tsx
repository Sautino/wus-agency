'use client';

import LoadingSpinner from '@/components/shared/loading-spinner/LoadingSpinner';

export default function LandingPageNewQuote({ loading, changeQuote }: { loading: boolean, quote: string, changeQuote: () => void }) {

  /**
   * Trigger changeQuote function in parent-component
   */
  const fetchNewNote = async () => {
    changeQuote();
  }

  return (
    <div className="flex justify-end">
      <button onClick={fetchNewNote} className="btn" disabled={loading}>
        {loading ? (
          <div className="h-6"><LoadingSpinner /></div>
        ) : 'New Quote'}
      </button>
    </div >
  )
}