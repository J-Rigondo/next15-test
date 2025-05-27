import { LayoutHeader } from '@/widgets/layout-header/ui/layout-header';
import { LayoutFooter } from '@/widgets/layout-footer';

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full">
      <LayoutHeader />
      <div className="h-full w-[1240px] mx-auto">{children}</div>
      <LayoutFooter />
    </div>
  );
}
