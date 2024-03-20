import Image from 'next/image';

export default function LandingPageImageMockup() {
  return (
    <div className="xl:flex-1 lg:h-[512px] h-72 w-full relative">
      <Image src="/landing-page/image-mockup.png" alt="Mockup image of the landing-page" sizes="(max-width: 100%)" fill className="object-contain" />
    </div>
  );
}