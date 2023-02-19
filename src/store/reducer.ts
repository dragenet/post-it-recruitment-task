import * as C from '~/store/constants';

export const reducer = (state: C.AppState, action: C.AppActions) => {
  const { type, payload } = action;
  switch (type) {
    case C.AppActionsNames.REPLACE_STORE_WITH_SERVER_STATE:
      return payload;

    default:
      return state;
  }
};
