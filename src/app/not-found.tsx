import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex justify-center">
      <div>
        <h2 className="text-xl mb-2">Not Found!</h2>
        <p className="text-sm">Return to <Link className="text-button underline" href="/">Homepage</Link></p>
      </div>
    </div>
  )
}