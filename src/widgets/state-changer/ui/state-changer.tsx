'use client';

import { useState } from 'react';
import { Button } from '@/shared/ui/button';
import { Card, CardContent, CardTitle } from '@/shared/ui/card';
import ViewCount from '@/features/use-state/propagation/ui/view-count';

export function StateChanger() {
  const [base, setBase] = useState(100);

  return (
    <div>
      <ViewCount initialViews={base} />
      <Card>
        <CardTitle>parent Value</CardTitle>
        <CardContent>{base}</CardContent>
      </Card>
      <Button
        className="w-full my-5"
        size="lg"
        onClick={() => setBase((prevState) => prevState + 100)}
      >
        Parent
      </Button>
    </div>
  );
}
