import { GetServerSideProps } from 'next';
import { Grid } from '@mui/material';
import Link from 'next/link';
import { getUsers } from '~/api';
import { SeoHead } from '~/components/molecules/SeoHead';
import { UserCard } from '~/components/organisms/UserCard';
import {
  GetServerState,
  useContextState,
  useServerStateSync,
  WithServerState,
} from '~/store';
import { BaseLayout } from '~/components/layouts/BaseLayout';

export const getServerSideProps: GetServerSideProps<
  GetServerState
> = async () => {
  const users = await getUsers();
  const serverState = {
    users,
  };
  return { props: { serverState } };
};

function HomePage({ serverState }: WithServerState) {
  useServerStateSync(serverState);
  const { users } = useContextState();

  return (
    <BaseLayout>
      <SeoHead />
      <Grid container spacing={2} alignItems="stretch">
        {users.slice(0, 8).map((user) => (
          <Link
            key={user.id}
            href={{
              pathname: '/user/[id]',
              query: {
                id: user.id,
              },
            }}
            legacyBehavior
          >
            <Grid item xs={12} sm={6} md={4} sx={{ cursor: 'pointer' }}>
              <UserCard user={user} />
            </Grid>
          </Link>
        ))}
      </Grid>
    </BaseLayout>
  );
}

export default HomePage;
