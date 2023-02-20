import { PostsListItem } from '~/components/organisms/PostsListItem';
import { List } from '@mui/material';
import { useContextState } from '~/store';
import { RemovePostConfirmationDialog } from '~/components/organisms/RemovePostConfirmationDialog';
import { useMutations } from '~/store/mutations';

export const PostsList = () => {
  const { posts } = useContextState();
  const { removePostWithConfirmationModal } = useMutations();

  return (
    <>
      <List>
        {posts.map((post) => (
          <PostsListItem
            key={post.id}
            post={post}
            onRemove={() => removePostWithConfirmationModal(post.id)}
          />
        ))}
      </List>
      <RemovePostConfirmationDialog />
    </>
  );
};
