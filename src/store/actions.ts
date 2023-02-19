import * as C from './constants';
import { Post } from '~/api';

export const replaceStoreWithServerState = (
  serverState: C.AppState
): C.AppActions => ({
  type: C.AppActionsTypes.SYNC_STORE_WITH_SERVER_STATE,
  payload: serverState,
});

export const addPost = (post: Post): C.AppActions => ({
  type: C.AppActionsTypes.ADD_POST,
  payload: post,
});

export const removePostById = (postId: number): C.AppActions => ({
  type: C.AppActionsTypes.REMOVE_POST_BY_ID,
  payload: postId,
});

export const setIsAddPostModalOpen = (value: boolean): C.AppActions => ({
  type: C.AppActionsTypes.SET_IS_ADD_POST_MODAL_OPEN,
  payload: value,
});
