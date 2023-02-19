import { GetServerSideProps } from 'next';
import { getUsers } from '~/api';
import { SeoHead } from '~/components/molecules/SeoHead';
import { GetServerState, useServerStateSync, WithServerState } from '~/store';
import { HomePageTemplate } from '~/components/templates/HomePageTemplate';

export const getServerSideProps: GetServerSideProps<
  GetServerState
> = async () => {
  const users = await getUsers();
  const serverState = {
    users,
    currentUser: null,
  };
  return { props: { serverState } };
};

function HomePage({ serverState }: WithServerState) {
  useServerStateSync(serverState);

  return (
    <>
      <SeoHead />
      <HomePageTemplate />
    </>
  );
}

export default HomePage;
