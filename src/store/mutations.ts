import { createPost, deletePostById, NewPost, Post } from '~/api';
import {
  addPost,
  removePostById,
  removePostWithConfirmationModal,
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

  removePost: async (postId: number) => {
    await deletePostById(postId);
    dispatch(removePostById(postId));
  },

  setIsAddPostModalOpen: (value: boolean) => {
    dispatch(setIsAddPostModalOpen(value));
  },

  removePostWithConfirmationModal: (value: Post['id'] | null) => {
    dispatch(removePostWithConfirmationModal(value));
  },
});

export const useMutations = () => {
  const { dispatch } = useContextStore();
  return useMemo(() => getMutations(dispatch), [dispatch]);
};
