import { AppState } from '~/store';
import { mockedUsers } from '~/mocks/mockedUsers';
import { mockedPosts } from '~/mocks/mockedPosts';

export const mockedState: AppState = {
  users: [mockedUsers[0]],
  posts: [mockedPosts[0]],
  currentUser: null,
};
