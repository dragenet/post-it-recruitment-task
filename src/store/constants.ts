import { Post, User } from '~/api';
import { Dispatch } from 'react';

export interface AppState {
  users: User[];
  posts: Post[];
  currentUser: User | null;
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
  REMOVE_POST_BY_ID = 'REMOVE_POST_BY_ID',
}

export type AppActions =
  | {
      type: AppActionsTypes.SYNC_STORE_WITH_SERVER_STATE;
      payload: AppState;
    }
  | {
      type: AppActionsTypes.REMOVE_POST_BY_ID;
      payload: number;
    };

export const initialAppState: AppState = {
  users: [],
  posts: [],
  currentUser: null,
};
