import LandingPageImageMockup from '@/components/landing-page/landing-page-image-mockup/ImageMockup';
import LandingPageQuote from '@/components/landing-page/landing-page-quote/Quote';

export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="xl:flex-row flex flex-col h-full justify-between items-center">
        <LandingPageImageMockup />
        <LandingPageQuote />
      </div>
    </div>
  );
}
