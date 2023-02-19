import { Stack, Typography } from '@mui/material';
import * as C from './constants';

export const CardContactBadge = ({
  icon,
  children,
}: C.CardContactBadgeProps) => {
  const Icon = icon;
  return (
    <Stack direction="row" alignItems="center" gap={1}>
      <Icon />
      <Typography>{children}</Typography>
    </Stack>
  );
};
