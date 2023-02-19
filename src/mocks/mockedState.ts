import { AppState, initialAppState } from '~/store';
import { mockedUsers } from '~/mocks/mockedUsers';
import { mockedPosts } from '~/mocks/mockedPosts';

export const mockedState: AppState = {
  ...initialAppState,
  users: [mockedUsers[0]],
  posts: [mockedPosts[0]],
};
