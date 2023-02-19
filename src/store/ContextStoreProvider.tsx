import { useReducer } from 'react';
import * as C from './constants';
import { StoreContext } from './context';
import { reducer } from './reducer';

export const ContextStoreProvider = ({
  children,
  initialState = C.initialAppState,
}: C.ContextStoreProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
