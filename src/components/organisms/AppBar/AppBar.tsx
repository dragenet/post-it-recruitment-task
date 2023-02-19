import { AppBar as AppBarBase, Box, Toolbar, Typography } from '@mui/material';
import { useContextState } from '~/store';
import * as C from './constants';

export const AppBar = ({ leftButton, rightButton }: C.AppBarProps) => {
  const { currentUser } = useContextState();
  return (
    <Box sx={{ flexGrow: 1 }} minHeight="48px" marginBottom={6}>
      <AppBarBase>
        <Toolbar>
          <Box component="div">{leftButton}</Box>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            textAlign="center"
          >
            {currentUser?.name || process.env.NEXT_PUBLIC_APP_NAME}
          </Typography>

          <Box>{rightButton}</Box>
        </Toolbar>
      </AppBarBase>
    </Box>
  );
};
