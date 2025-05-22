import type { Metadata } from 'next';
import './globals.css';
import { Noto_Sans_KR } from 'next/font/google';
import AppProvider from '@/app-layer/app-provider';

const notoSansKR = Noto_Sans_KR({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: '15 Version',
  description: 'Explore 15 Version',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={notoSansKR.className}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
