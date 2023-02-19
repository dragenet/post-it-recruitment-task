import { Post, User } from '~/api';
import { Dispatch } from 'react';

export interface AppState {
  users: User[];
  posts: Post[];
  currentUser: User | null;
  isAddPostsModalOpen: boolean;
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
    };

export const initialAppState: AppState = {
  users: [],
  posts: [],
  currentUser: null,
  isAddPostsModalOpen: false,
};
