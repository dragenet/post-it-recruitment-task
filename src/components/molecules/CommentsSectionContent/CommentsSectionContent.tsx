import * as C from './constants';
import { Box, Grid, List, Typography } from '@mui/material';
import { CommentItem } from '~/components/molecules/CommentItem';

export const CommentsSectionContent = ({
  comments,
}: C.CommentsSectionContentProps) => (
  <Box>
    <Grid item alignSelf="flex-start">
      <Typography variant="h5">Comments</Typography>
    </Grid>

    <Grid item>
      <List>
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </List>
    </Grid>
  </Box>
);
