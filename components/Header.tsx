import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="flex flex-col gap-3 py-3 pb-4 mb-8">
      <div className="flex flex-col items-center gap-4 my-8">
        <Image src="/headerImage.png" alt="header" width={300} height={300} />
        <span>seongyeupkim@gmail.com / +82-10-6206-9746</span>
      </div>
      <nav className="font-bold">
        <div className="flex justify-evenly">
          <Link href="/">Home</Link>
          <Link href="/publications">PUBLICATIONS</Link>
          <HoverCard openDelay={0}>
            <HoverCardTrigger>
              <Link href="#">PROJECT</Link>
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="flex flex-col gap-3">
                <Link href="/project/police-project">POLICE PROJECT</Link>

                <Link href="/project/samsung-dreamclass">
                  Samsung Dreamclass
                </Link>

                <Link href="/project/ssal">SSAL</Link>

                <Link href="/project/dear">DEAR</Link>

                <Link href="/project/Kosaf-HOPE-LADDER">KOSAF HOPE LADDER</Link>

                <Link href="/project/Kosaf-ALS">Kosaf ALS</Link>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </nav>
    </header>
  );
};

export default Header;
