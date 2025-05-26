import { useMutation } from '@tanstack/react-query';
import { createPost } from '@/entities/post/api/post-action';
import { CreatePostDto } from '@/entities/post/api/types';
import { toast } from 'sonner';

export function usePostWriteMutation() {
  return useMutation<void, Error, CreatePostDto>({
    mutationFn: createPost,
    onSuccess() {
      toast.success('Post write successfully.');
    },
    onError(error) {
      toast.error(error.message);
    },
  });
}
