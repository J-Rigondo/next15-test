import Link from 'next/link';
import { cn } from '@/shared/lib/css-utils';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: '900' });

export default function Logo() {
  return (
    <Link href="/">
      <div className="hidden items-center gap-x-2 px-4 transition hover:opacity-75 md:flex">
        <Image src="/logoipsum-224.svg" alt="Logo" width={30} height={30} />
        <p className={cn('text-xl', montserrat.className)}>NextExplorer</p>
      </div>
    </Link>
  );
}
