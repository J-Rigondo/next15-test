'use client';

import { useEffect } from 'react';
import useSession from '@/features/session/init/model/use-session';

export default function UserLoader() {
  const { mutate } = useSession();

  useEffect(() => {
    mutate();
  }, [mutate]);

  return <div />;
}
