import Image from 'next/image';

type PostCardProps = {
  imgUrl: string;
  postType: string;
  title: string;
  author: string;
  createdAt: string;
};

export default function PostCard({
  imgUrl,
  postType,
  title,
  author,
  createdAt,
}: PostCardProps) {
  return (
    <div className="flex pb-10 first:pt-10">
      <div className="flex-shrink-0 rounded-lg w-[255px] h-[150px] relative overflow-hidden">
        <Image className="object-cover" src={imgUrl} alt="Post Image" fill />
      </div>
      <div className="space-y-2.5 pl-6">
        <p className="text-sm text-sky-700 font-medium">{postType}</p>
        <p className="text-xl font-semibold">{title}</p>
        <div className="flex items-center text-xs">
          <p className=" text-gray-600 font-semibold mr-3">{author}</p>
          <p className="text-gray-400">{createdAt}</p>
        </div>
      </div>
    </div>
  );
}
