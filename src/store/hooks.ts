import { useContext, useEffect } from 'react';
import { StoreContext } from '~/store/context';
import { replaceStoreWithServerState } from '~/store/actions';
import * as C from './constants';

export const useContextStore = () => useContext(StoreContext);

export const useServerStateSync = (serverState: C.AppState) => {
  const { dispatch } = useContextStore();
  useEffect(() => {
    return dispatch(replaceStoreWithServerState(serverState));
  }, [serverState, dispatch]);
};

export const useContextState = () => {
  const { state } = useContextStore();
  return state;
};
