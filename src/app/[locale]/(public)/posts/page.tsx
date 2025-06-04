import { PostList } from '@/widgets/post-list';

export const revalidate = 60;

export default async function PostPage() {
  const data = await fetch('https://api.vercel.app/blog');
  return (
    <div className="p-20">
      <PostList />
    </div>
  );
}
