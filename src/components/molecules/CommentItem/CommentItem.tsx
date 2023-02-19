import {
  Grid,
  ListItem as ListItemBase,
  ListItemText,
  Typography,
} from '@mui/material';

import * as C from './constants';

export const CommentItem = ({ comment }: C.CommentItemProps) => {
  return (
    <ListItemBase dense>
      <ListItemText
        primary={
          <Grid container justifyContent="space-between">
            <Grid item>
              <Typography>{comment.name}</Typography>
            </Grid>
            <Grid item>
              <Typography>{comment.email}</Typography>
            </Grid>
          </Grid>
        }
        secondary={comment.body}
      />
    </ListItemBase>
  );
};
