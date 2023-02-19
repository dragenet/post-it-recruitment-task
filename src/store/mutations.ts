import { deletePostById } from '~/api';
import { removePostById } from '~/store/actions';
import { Dispatch } from 'react';
import { AppActions, AppState } from '~/store/constants';
import { useContextStore } from '~/store/hooks';

export const getMutations = (
  state: AppState,
  dispatch: Dispatch<AppActions>
) => ({
  removePost: async (postId: number) => {
    await deletePostById(postId);
    dispatch(removePostById(postId));
  },
});

export const useMutation = () => {
  const { state, dispatch } = useContextStore();
  return getMutations(state, dispatch);
};
