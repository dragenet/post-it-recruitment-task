import { createContext } from 'react';
import * as C from './constants';

export const StoreContext = createContext<C.ContextStore<C.AppActions>>({
  state: C.initialAppState,
} as C.ContextStore<C.AppActions>);
