import Link from 'next/link';
import { paths } from '~/config/paths';
import { Grid } from '@mui/material';
import { UserCard } from '~/components/organisms/UserCard';
import { useContextState } from '~/store';

export const UserCardsGrid = () => {
  const { users } = useContextState();

  return (
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
  );
};
