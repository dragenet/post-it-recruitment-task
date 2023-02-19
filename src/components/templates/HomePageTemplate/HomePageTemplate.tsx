import { Grid } from '@mui/material';
import Link from 'next/link';
import { paths } from '~/config/paths';
import { UserCard } from '~/components/organisms/UserCard';
import { useContextState } from '~/store';
import { BaseLayout } from '~/components/templates/BaseLayout';

export const HomePageTemplate = () => {
  const { users } = useContextState();

  return (
    <BaseLayout>
      <Grid container spacing={2} alignItems="stretch">
        {users.slice(0, 8).map((user) => (
          <Link
            key={user.id}
            href={{
              pathname: paths.userDetails,
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
};
