import Image from 'next/image';

export default function Logo() {
  return (
    <div className="h-full w-16 relative">
      <Image src="/logo.png" alt="W&S Agency logo" sizes="(max-width: 64px)" fill className="object-contain" />
    </div>
  );
}