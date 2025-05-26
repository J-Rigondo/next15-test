import { getPosts } from '@/entities/post/api/post-action';
import PostCard from '@/entities/post/ui/post-card';
import dayjs from 'dayjs';
import { SAMPLE_IMAGES } from '@/widgets/post-list/lib/constant';

export default async function PostList() {
  const posts = await getPosts();

  return (
    <div className=" divide-y divide-slate-300 space-y-10">
      {posts.map((p, idx) => (
        <PostCard
          key={p.id}
          postType={p.type}
          author={p.author.username}
          title={p.title}
          createdAt={dayjs(p.createdAt).format('YYYY-MM-DD HH:mm:ss')}
          imgUrl={SAMPLE_IMAGES[idx % SAMPLE_IMAGES.length]}
        />
      ))}
    </div>
  );
}
