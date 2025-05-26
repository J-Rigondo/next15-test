'use client';

import PostWrite from '@/features/post/write/ui/post-write';
import { Button } from '@/shared/ui/button';
import usePostListActionStore from '@/widgets/post-list/model/store';

export default function ActionBar() {
  const { isPublished, setIsPublished } = usePostListActionStore();
  return (
    <div className="flex items-center justify-end space-x-3">
      <Button
        variant={isPublished ? 'default' : 'outline'}
        onClick={() => setIsPublished(!isPublished)}
      >
        Publish
      </Button>
      <PostWrite />
    </div>
  );
}
