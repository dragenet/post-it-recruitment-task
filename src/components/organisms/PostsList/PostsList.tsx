import { PostsListItem } from '~/components/organisms/PostsListItem';
import { List } from '@mui/material';
import { useContextState } from '~/store';

export const PostsList = () => {
  const { posts } = useContextState();

  return (
    <List>
      {posts.map((post) => (
        <PostsListItem key={post.id} post={post} />
      ))}
    </List>
  );
};
