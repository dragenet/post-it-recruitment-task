import { Grid } from '@mui/material';
import Link from 'next/link';
import { getUsers, User } from '~/api';
import { SeoHead } from '~/components/SeoHead';
import { UserCard } from '~/components/UserCard';

export const getServerSideProps = async () => {
  const users = await getUsers();
  return { props: { users } };
};

export interface HomePageProps {
  users: User[];
}

export default function HomePage({ users }: HomePageProps) {
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
