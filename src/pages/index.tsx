import { Grid } from '@mui/material';
import Link from 'next/link';
import { getUsers } from '~/api';
import { SeoHead } from '~/components/molecules/SeoHead';
import { UserCard } from '~/components/molecules/UserCard';
import { useContextState, useServerStateSync, WithServerState } from '~/store';

export const getServerSideProps = async () => {
  const users = await getUsers();
  const serverState = {
    users,
  };
  return { props: { serverState } };
};

export default function HomePage({ serverState }: WithServerState) {
  useServerStateSync(serverState);
  const { users } = useContextState();

  return (
    <>
      <SeoHead />
      <Grid container spacing={2} alignItems="stretch" sx={{ p: 3 }}>
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
    </>
  );
}
