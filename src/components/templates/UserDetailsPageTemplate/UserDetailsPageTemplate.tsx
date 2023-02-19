import { useContextState } from '~/store';
import { BackButton } from '~/components/molecules/BackButton';
import { BaseLayout } from '~/components/templates/BaseLayout';
import { useMutations } from '~/store/mutations';
import { AddPostButton } from '~/components/molecules/AddPostButton';
import { List } from '@mui/material';
import { PostListItem } from '~/components/organisms/PostListItem';
import { AddPostDialog } from '~/components/organisms/AddPostDialog';

export const UserDetailsPageTemplate = () => {
  const { posts } = useContextState();
  const { setIsAddPostModalOpen } = useMutations();

  return (
    <BaseLayout
      barButtons={{
        leftButton: <BackButton />,
        rightButton: (
          <AddPostButton
            aria-label="Add post"
            edge="end"
            onClick={() => setIsAddPostModalOpen(true)}
          />
        ),
      }}
    >
      <List>
        {posts.map((post) => (
          <PostListItem key={post.id} post={post} />
        ))}
      </List>
      <AddPostDialog />
    </BaseLayout>
  );
};
