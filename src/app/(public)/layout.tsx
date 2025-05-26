import { LayoutFooter } from '@/widgets/layout-footer/ui/layout-footer';
import { LayoutHeader } from '@/widgets/layout-header/ui/layout-header';

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
