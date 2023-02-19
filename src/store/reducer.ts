import * as C from '~/store/constants';

export const reducer = (state: C.AppState, action: C.AppActions) => {
  const { type, payload } = action;

  switch (type) {
    case C.AppActionsTypes.SYNC_STORE_WITH_SERVER_STATE:
      return { ...state, ...payload };

    case C.AppActionsTypes.SET_IS_ADD_POST_MODAL_OPEN:
      return {
        ...state,
        isAddPostsModalOpen: payload,
      };

    case C.AppActionsTypes.ADD_POST:
      return {
        ...state,
        posts: [payload, ...state.posts],
      };

    case C.AppActionsTypes.REMOVE_POST_BY_ID:
      const posts = state.posts.filter((post) => post.id !== payload);
      return {
        ...state,
        posts,
      };

    default:
      return state;
  }
};
