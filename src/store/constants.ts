import { User } from '~/api';
import { Dispatch } from 'react';

export interface AppState {
  users: User[];
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

export enum AppActionsNames {
  REPLACE_STORE_WITH_SERVER_STATE = 'REPLACE_STORE_WITH_SERVER_STATE',
}

export type AppActions = {
  type: AppActionsNames.REPLACE_STORE_WITH_SERVER_STATE;
  payload: AppState;
};

export const initialAppState: AppState = {
  users: [],
};
