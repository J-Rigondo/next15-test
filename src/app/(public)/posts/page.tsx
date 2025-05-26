import PostList from '@/widgets/post-list/ui/post-list';
import ActionBar from '@/widgets/post-list/ui/action-bar';

export default function PostPage() {
  return (
    <div className="p-20">
      <ActionBar />
      <PostList />
    </div>
  );
}
