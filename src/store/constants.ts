import { Comment, Post, User } from '~/api';
import { Dispatch } from 'react';

export interface AppState {
  users: User[];
  posts: Post[];
  comments: Record<number, Comment[]>;
  currentUser: User | null;
  currentPost: Post | null;
  isAddPostsModalOpen: boolean;
  postToRemoveId: Post['id'] | null;
}

export interface ContextStoreProviderProps {
  children?: JSX.Element | JSX.Element[];
  initialState?: AppState;
}

export interface ContextStore<T> {
  state: AppState;
  dispatch: Dispatch<T>;
}

export interface WithServerState {
  serverState: AppState;
}

export interface GetServerState {
  serverState: Partial<AppState>;
}

export enum AppActionsTypes {
  SYNC_STORE_WITH_SERVER_STATE = 'SYNC_STORE_WITH_SERVER_STATE',
  ADD_POST = 'ADD_POST',
  REMOVE_POST_BY_ID = 'REMOVE_POST_BY_ID',
  SET_IS_ADD_POST_MODAL_OPEN = 'SET_IS_ADD_POST_MODAL_OPEN',
  REMOVE_POST_CONFIRMATION_MODAL_OPEN = 'REMOVE_POST_CONFIRMATION_MODAL_OPEN',
}

export type AppActions =
  | {
      type: AppActionsTypes.SYNC_STORE_WITH_SERVER_STATE;
      payload: AppState;
    }
  | {
      type: AppActionsTypes.ADD_POST;
      payload: Post;
    }
  | {
      type: AppActionsTypes.REMOVE_POST_BY_ID;
      payload: number;
    }
  | {
      type: AppActionsTypes.SET_IS_ADD_POST_MODAL_OPEN;
      payload: boolean;
    }
  | {
      type: AppActionsTypes.REMOVE_POST_CONFIRMATION_MODAL_OPEN;
      payload: Post['id'] | null;
    };

export const initialAppState: AppState = {
  users: [],
  posts: [],
  comments: {},
  currentUser: null,
  currentPost: null,
  isAddPostsModalOpen: false,
  postToRemoveId: null,
};
