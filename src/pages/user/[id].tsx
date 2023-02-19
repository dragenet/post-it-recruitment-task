import { getPostsByUserId, getUserById } from '~/api';
import { GetServerSideProps } from 'next';
import {
  GetServerState,
  useContextState,
  useServerStateSync,
  WithServerState,
} from '~/store';
import { BaseLayout } from '~/components/templates/BaseLayout';
import { BackButton } from '~/components/molecules/BackButton';
import { AddPostButton } from '~/components/molecules/AddPostButton';
import { List } from '@mui/material';
import { PostListItem } from '~/components/organisms/PostListItem';
import { AddPostDialog } from '~/components/organisms/AddPostDialog';
import { useMutations } from '~/store/mutations';

export const getServerSideProps: GetServerSideProps<GetServerState> = async (
  ctx
) => {
  const userId = Number(ctx.query.id);
  const currentUser = await getUserById(userId);
  const posts = await getPostsByUserId(userId);
  const serverState = {
    posts,
    currentUser,
  };
  return { props: { serverState } };
};

export default function UserPage({ serverState }: WithServerState) {
  useServerStateSync(serverState);
  const { posts } = useContextState();
  const { setIsAddPostModalOpen } = useMutations();
  return (
    <>
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
    </>
  );
}