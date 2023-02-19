import { createPost, deletePostById, NewPost } from '~/api';
import {
  addPost,
  removePostById,
  setIsAddPostModalOpen,
} from '~/store/actions';
import { Dispatch, useMemo } from 'react';
import { AppActions } from '~/store/constants';
import { useContextStore } from '~/store/hooks';

export const getMutations = (dispatch: Dispatch<AppActions>) => ({
  addPost: async (post: NewPost) => {
    const newPost = await createPost(post);
    dispatch(addPost({ ...post, ...newPost }));
  },

  setIsAddPostModalOpen: (value: boolean) => {
    dispatch(setIsAddPostModalOpen(value));
  },

  removePost: async (postId: number) => {
    await deletePostById(postId);
    dispatch(removePostById(postId));
  },
});

export const useMutations = () => {
  const { dispatch } = useContextStore();
  return useMemo(() => getMutations(dispatch), [dispatch]);
};
