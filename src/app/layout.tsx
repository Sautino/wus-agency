import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'W&S Homepage',
    template: '%s | W&S'
  },
  description: 'W&S Homepage',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="2xl:w-[1536px] w-full flex flex-col m-auto justify-between lg:px-16 px-6 min-h-screen text-light">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
