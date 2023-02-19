import * as C from './constants';
import { Box } from '@mui/material';
import { AppBar } from '~/components/molecules/AppBar';

export const BaseLayout = ({ children, barButtons }: C.DetailsLayoutProps) => (
  <Box>
    <AppBar {...barButtons} />
    <Box marginX={4}>{children}</Box>
  </Box>
);
