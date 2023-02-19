import { getCommentsByPostId, getPostById, getUserById } from '~/api';
import { GetServerSideProps } from 'next';
import {
  GetServerState,
  useContextState,
  useServerStateSync,
  WithServerState,
} from '~/store';
import { SeoHead } from '~/components/molecules/SeoHead';
import { PostsDetailsPageTemplate } from '~/components/templates/PostsDetailsPageTemplate';

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
  const { currentUser } = useContextState();

  if (!currentUser) return null;

  return (
    <>
      <SeoHead title={currentUser?.username} />
      <PostsDetailsPageTemplate />
    </>
  );
}
