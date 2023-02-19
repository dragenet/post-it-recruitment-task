import { AppBar as AppBarBase, Box, Grid, Typography } from '@mui/material';
import { useContextState } from '~/store';
import * as C from './constants';

export const AppBar = ({ leftButton, rightButton }: C.AppBarProps) => {
  const { currentUser } = useContextState();
  return (
    <Box minHeight="48px" marginBottom={6}>
      <AppBarBase>
        <Grid container direction="row" alignItems="center" minHeight="48px">
          <Grid item xs={1}>
            {leftButton}
          </Grid>

          <Grid item alignSelf="center" xs={10}>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              textAlign="center"
            >
              {currentUser?.name || process.env.NEXT_PUBLIC_APP_NAME}
            </Typography>
          </Grid>
          <Grid item xs={1}>
            {rightButton}
          </Grid>
        </Grid>
      </AppBarBase>
    </Box>
  );
};
