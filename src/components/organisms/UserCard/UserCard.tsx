import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';

import * as C from './constants';

export const UserCard = ({ user }: C.UserCardProps) => (
  <Card sx={{ height: '100%' }}>
    <CardContent>
      <Box marginBottom={1}>
        <Typography variant="subtitle2" color="text.secondary">
          @{user.username}
        </Typography>
        <Typography variant="h4">{user.name}</Typography>
      </Box>

      <Typography variant="h5" marginBottom={0.5}>
        Contact
      </Typography>
      <Container sx={{ marginBottom: 1 }}>
        <Stack direction="row" alignItems="center" gap={1}>
          <PhoneIcon />
          <Typography>{user.phone}</Typography>
        </Stack>

        <Stack direction="row" alignItems="center" gap={1}>
          <EmailIcon />
          <Link href={`mailto:${user.email}`}>{user.email}</Link>
        </Stack>

        <Stack direction="row" alignItems="center" gap={1}>
          <LanguageIcon />
          <Link href={user.website}>{user.website}</Link>
        </Stack>
      </Container>

      <Typography variant="h5" marginBottom={0.5}>
        Company
      </Typography>
      <Container>
        <Typography variant="h6">{user.company.name}</Typography>
        <Typography color="text.secondary">
          {user.company.catchPhrase}
        </Typography>
        <Grid container direction="row" marginTop={0.5} spacing={0.5}>
          {user.company.bs.split(' ').map((item) => (
            <Grid key={item} item>
              <Chip size="small" label={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </CardContent>
  </Card>
);
