import { getCommentsByPostId, getPostById, getUserById } from '~/api';
import { GetServerSideProps } from 'next';
import {
  GetServerState,
  useContextState,
  useServerStateSync,
  WithServerState,
} from '~/store';
import { BaseLayout } from '~/components/templates/BaseLayout';
import { BackButton } from '~/components/molecules/BackButton';
import { PostDetails } from '~/components/molecules/PostDetails';
import { CommentsSection } from '~/components/organisms/CommentsSection';

export const getServerSideProps: GetServerSideProps<GetServerState> = async (
  ctx
) => {
  const postId = Number(ctx.query.id);
  const currentPost = await getPostById(postId);
  const currentUser = await getUserById(currentPost.userId);
  const comments = await getCommentsByPostId(currentPost.id);
  const serverState = {
    currentPost,
    currentUser,
    comments: {
      [postId]: comments,
    },
  };
  return { props: { serverState } };
};

export default function PostDetailsPage({ serverState }: WithServerState) {
  useServerStateSync(serverState);
  const { currentPost, comments } = useContextState();
  if (!currentPost) return null;

  return (
    <>
      <BaseLayout
        barButtons={{
          leftButton: <BackButton />,
        }}
      >
        <PostDetails post={currentPost} />
        <CommentsSection comments={comments[currentPost.id]} />
      </BaseLayout>
    </>
  );
}
