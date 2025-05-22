'use client';

import { Toaster } from '@/shared/ui/sonner';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import UserLoader from '@/app-layer/user-loader';

export default function AppProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: { queries: { staleTime: 3000, retry: 0 } },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <UserLoader />
      {children}
      <Toaster richColors />
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-right" />
    </QueryClientProvider>
  );
}
