import { useMutation } from '@tanstack/react-query';
import { createPost } from '@/entities/post/api/post-action';
import { toast } from 'sonner';

export function usePostWriteMutation() {
  return useMutation({
    mutationFn: createPost,
    onSuccess() {
      toast.success('Post write successfully.');
    },
    onError(error) {
      toast.error(error.message);
    },
  });
}
