import { PostList } from '@/widgets/post-list';
import { routing } from '@/i18n/routing';

export const revalidate = 60;
export const dynamicParams = true;
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function PostPage() {
  const data = await fetch('https://api.vercel.app/blog');
  return (
    <div className="p-20">
      <PostList />
    </div>
  );
}
