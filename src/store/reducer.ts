import { AppStateType } from '~/store/constants';

export const reducer = (state: AppStateType, action: any) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};
