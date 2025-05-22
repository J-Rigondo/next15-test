import { useMutation } from '@tanstack/react-query';
import { initSession } from '@/rpc/session/init';
import { toast } from 'sonner';

export default function useSession() {
  return useMutation<void>({
    mutationFn: initSession,
    onSuccess() {
      toast.success('Welcome to Next 15');
    },
  });
}
