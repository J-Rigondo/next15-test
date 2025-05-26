import { getPosts } from '@/entities/post/api/post-action';
import PostCard from '@/entities/post/ui/post-card';
import dayjs from 'dayjs';

export default async function PostList() {
  const posts = await getPosts();

  return (
    <div className=" divide-y divide-slate-300 space-y-10">
      {posts.map((p) => (
        <PostCard
          key={p.id}
          postType={p.type}
          author={p.author.username}
          title={p.title}
          createdAt={dayjs(p.createdAt).format('YYYY-MM-DD HH:mm:ss')}
          imgUrl="https://www.blockmedia.co.kr/wp-content/uploads/2024/10/%EA%B1%B0%EB%9E%98%EC%86%8C-%EC%A7%80%EA%B0%91-560x318.png"
        />
      ))}
    </div>
  );
}
