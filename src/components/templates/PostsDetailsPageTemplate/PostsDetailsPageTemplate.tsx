import { useContextState } from '~/store';
import { BackButton } from '~/components/molecules/BackButton';
import { BaseLayout } from '~/components/templates/BaseLayout';
import { PostDetails } from '~/components/molecules/PostDetails';
import { CommentsSection } from '~/components/organisms/CommentsSection';

export const PostsDetailsPageTemplate = () => {
  const { currentPost, comments } = useContextState();

  if (!currentPost) return null;

  return (
    <BaseLayout
      barButtons={{
        leftButton: <BackButton />,
      }}
    >
      <PostDetails post={currentPost} />
      <CommentsSection comments={comments[currentPost.id]} />
    </BaseLayout>
  );
};
