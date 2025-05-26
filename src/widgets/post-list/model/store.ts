import { create } from 'zustand/react';

interface PostListActionState {
  isPublished: boolean;
  setIsPublished: (isPublished: boolean) => void;
}

const usePostListActionStore = create<PostListActionState>()((set) => ({
  isPublished: false,
  setIsPublished(isPublished: boolean) {
    set({ isPublished });
  },
}));

export default usePostListActionStore;
