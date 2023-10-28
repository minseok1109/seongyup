import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex flex-col gap-3 py-3 border-b pb-4">
      <div className="flex flex-col items-center gap-4 my-8">
        <h1 className="text-center text-2xl font-bold">SeongYeup Kim</h1>
        <span>seongyeupkim@gmail.com / +82-10-6206-9746</span>
      </div>
      <nav className="font-bold">
        <ul className="flex justify-evenly">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/publications">PUBLICATIONS</Link>
          </li>
          <li>
            <HoverCard openDelay={0}>
              <HoverCardTrigger>
                <Link href="#">PROJECT</Link>
              </HoverCardTrigger>
              <HoverCardContent>
                <ul className="flex flex-col gap-3">
                  <li>
                    <Link href="/project/police-project">POLICE PROJECT</Link>
                  </li>
                  <li>
                    <Link href="/project/samsung-dreamclass">
                      Samsung Dreamclass
                    </Link>
                  </li>

                  <li>
                    <Link href="/project/ssal">SSAL</Link>
                  </li>

                  <li>
                    <Link href="/project/dear">DEAR</Link>
                  </li>

                  <li>
                    <Link href="/project/Kosaf-HOPE-LADDER">
                      Kosaf HOPE LADDER
                    </Link>
                  </li>

                  <li>
                    <Link href="/project/Kosaf-ALS">Kosaf ALS</Link>
                  </li>
                </ul>
              </HoverCardContent>
            </HoverCard>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
