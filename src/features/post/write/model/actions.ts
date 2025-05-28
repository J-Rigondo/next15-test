import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { createPost } from '@/entities/post';

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
