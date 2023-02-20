import { BackButton } from '~/components/molecules/BackButton';
import { BaseLayout } from '~/components/templates/BaseLayout';
import { PostDetails } from '~/components/organisms/PostDetails';
import { CommentsSection } from '~/components/organisms/CommentsSection';

export const PostsDetailsPageTemplate = () => (
  <BaseLayout
    barButtons={{
      leftButton: <BackButton />,
    }}
  >
    <PostDetails />
    <CommentsSection />
  </BaseLayout>
);
