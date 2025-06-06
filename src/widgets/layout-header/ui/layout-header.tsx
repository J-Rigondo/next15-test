import { Button } from '@/shared/ui/button';
import Link from 'next/link';
import Logo from './logo';

export function LayoutHeader() {
  return (
    <div className="fixed top-0 flex h-14 w-full items-center border-b bg-white px-4 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex w-full items-center justify-between md:max-w-screen-2xl">
        <Logo />
        <div className="flex w-full items-center justify-between space-x-4 md:block md:w-auto">
          <Button size="sm" variant="outline" asChild>
            <Link href="/posts">ServerAction</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/use-state">UseState</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
