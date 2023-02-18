import { User } from '~/api';
import { Dispatch } from 'react';

export interface AppStateType {
  users: User[];
}

export interface ContextStoreProviderProps {
  children?: JSX.Element;
  initialState?: AppStateType;
}

export const initialAppState: AppStateType = {
  users: [],
};

export interface ContextStoreObject<T> {
  state: AppStateType;
  dispatch: Dispatch<T>;
}
