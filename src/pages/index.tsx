import { SeoHead } from '~/components/SeoHead';
import { UserCard } from '~/components/UserCard';
import { Grid } from '@mui/material';
import { mockedUsers } from '~/mocks/mockedUsers';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <SeoHead />
      <Grid container spacing={2} alignItems="stretch" sx={{ p: 3 }}>
        {mockedUsers.slice(0, 8).map((user) => (
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
