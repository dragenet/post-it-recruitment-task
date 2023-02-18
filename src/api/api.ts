import { User } from '~/api/constants';

const fetcher = async (path: string, options?: RequestInit) =>
  fetch(`${process.env.NEXT_PUBLIC_API_BASE}${path}`, options);

export const getUsers = async (): Promise<User[]> =>
  fetcher('/users').then((res) => res.json());
