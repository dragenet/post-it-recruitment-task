import * as C from './constants';

export const replaceStoreWithServerState = (
  serverState: C.AppState
): C.AppActions => ({
  type: C.AppActionsTypes.SYNC_STORE_WITH_SERVER_STATE,
  payload: serverState,
});

export const removePostById = (postId: number): C.AppActions => ({
  type: C.AppActionsTypes.REMOVE_POST_BY_ID,
  payload: postId,
});
