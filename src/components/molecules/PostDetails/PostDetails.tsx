import { Box, Typography } from '@mui/material';
import * as C from './constants';

export const PostDetails = ({ post }: C.PostDetailsProps) => (
  <Box marginBottom={1}>
    <Typography variant="h4">{post.title}</Typography>
    <Typography>{post.body}</Typography>
  </Box>
);
