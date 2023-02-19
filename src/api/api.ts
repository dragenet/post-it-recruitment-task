import { NewPost, Post, User } from '~/api/constants';
import fetch from 'cross-fetch';

export const fetcher = async (path: string, options?: RequestInit) =>
  fetch(`${process.env.NEXT_PUBLIC_API_BASE}${path}`, options).then((res) =>
    res.json()
  );

export const getUsers = async (): Promise<User[]> => fetcher('/users');

export const getUserById = async (userId: number): Promise<User> =>
  fetcher(`/users/${userId}`);

export const getPostsByUserId = async (userId: number): Promise<Post[]> =>
  fetcher(`/users/${userId}/posts`);

export const createPost = async (post: NewPost): Promise<Pick<Post, 'id'>> =>
  fetcher(`/posts`, {
    method: 'POST',
    body: JSON.stringify(post),
  });

export const deletePostById = async (
  postId: number
): Promise<Record<string, never>> =>
  fetcher(`/posts/${postId}`, { method: 'DELETE' });
