import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Link,
  Typography,
} from '@mui/material';
import emailIcon from '@mui/icons-material/Email';
import phoneIcon from '@mui/icons-material/Phone';
import languageIcon from '@mui/icons-material/Language';

import * as C from './constants';
import { CardContactBadge } from '~/components/molecules/CardContactBadge';
import { CompanySection } from '~/components/molecules/CompanySection';

export const UserCard = ({ user }: C.UserCardProps) => (
  <Card sx={{ height: '100%' }}>
    <CardActionArea>
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
          <CardContactBadge icon={phoneIcon}>{user.phone}</CardContactBadge>

          <CardContactBadge icon={emailIcon}>
            <Link href={`mailto:${user.email}`}>{user.email}</Link>
          </CardContactBadge>

          <CardContactBadge icon={languageIcon}>
            <Link href={user.website}>{user.website}</Link>
          </CardContactBadge>
        </Container>

        <Typography variant="h5" marginBottom={0.5}>
          Company
        </Typography>
        <CompanySection company={user.company} />
      </CardContent>
    </CardActionArea>
  </Card>
);
