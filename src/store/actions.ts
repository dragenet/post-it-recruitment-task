import * as C from './constants';

export const replaceStoreWithServerState = (serverState: C.AppState) => ({
  type: C.AppActionsNames.REPLACE_STORE_WITH_SERVER_STATE,
  payload: serverState,
});
