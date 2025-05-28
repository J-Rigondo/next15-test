'use client';

import { useState } from 'react';
import { Card, CardContent, CardTitle } from '@/shared/ui/card';
import { Button } from '@/shared/ui/button';

type ViewCountProps = {
  initialViews: number;
};

export function ViewCount({ initialViews }: ViewCountProps) {
  const [views, setViews] = useState(initialViews);

  return (
    <div>
      <Card>
        <CardTitle>Child Value</CardTitle>
        <CardContent>{views}</CardContent>
      </Card>
      <Button
        className="w-full my-5"
        size="lg"
        variant="secondary"
        onClick={() => setViews((prev) => prev + 1000)}
      >
        Child
      </Button>
    </div>
  );
}
