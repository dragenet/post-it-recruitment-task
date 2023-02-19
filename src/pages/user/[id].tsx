import { getPostsByUserId, getUserById } from '~/api';
import { GetServerSideProps } from 'next';
import {
  GetServerState,
  useContextState,
  useServerStateSync,
  WithServerState,
} from '~/store';
import { UserDetailsPageTemplate } from '~/components/templates/UserDetailsPageTemplate';
import { SeoHead } from '~/components/molecules/SeoHead';

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

export default function UserDetailsPage({ serverState }: WithServerState) {
  useServerStateSync(serverState);
  const { currentUser } = useContextState();

  return (
    <>
      <SeoHead title={currentUser?.username} />
      <UserDetailsPageTemplate />
    </>
  );
}
