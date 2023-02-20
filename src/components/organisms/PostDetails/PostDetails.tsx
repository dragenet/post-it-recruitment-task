import { Box, Typography } from '@mui/material';
import { useContextState } from '~/store';

export const PostDetails = () => {
  const { currentPost } = useContextState();

  if (!currentPost) return null;

  return (
    <Box marginBottom={1}>
      <Typography variant="h4">{currentPost.title}</Typography>
      <Typography>{currentPost.body}</Typography>
    </Box>
  );
};
