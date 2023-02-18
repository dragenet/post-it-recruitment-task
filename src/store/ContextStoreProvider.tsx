import { createContext, useReducer } from 'react';
import * as C from './constants';
import { reducer } from './reducer';

export const ContextStore = createContext<C.ContextStoreObject<null>>({
  state: C.initialAppState,
} as C.ContextStoreObject<null>);

export const ContextStoreProvider = ({
  children,
  initialState = C.initialAppState,
}: C.ContextStoreProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ContextStore.Provider value={{ state, dispatch }}>
      {children}
    </ContextStore.Provider>
  );
};
