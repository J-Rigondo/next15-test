import type { Metadata } from 'next';
import '../globals.css';
import { Noto_Sans_KR } from 'next/font/google';
import AppProvider from '@/app-layer/app-provider';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';

const notoSansKR = Noto_Sans_KR({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: '15 Version',
  description: 'Explore 15 Version',
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang="ko">
      <body className={notoSansKR.className}>
        <NextIntlClientProvider>
          <AppProvider>{children}</AppProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
