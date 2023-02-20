import { BackButton } from '~/components/molecules/BackButton';
import { BaseLayout } from '~/components/templates/BaseLayout';
import { AddPostButton } from '~/components/organisms/AddPostButton';
import { AddPostDialog } from '~/components/organisms/AddPostDialog';
import { PostsList } from '~/components/organisms/PostsList';

export const UserDetailsPageTemplate = () => {
  return (
    <BaseLayout
      barButtons={{
        leftButton: <BackButton />,
        rightButton: <AddPostButton aria-label="Add post" />,
      }}
    >
      <PostsList />
      <AddPostDialog />
    </BaseLayout>
  );
};
