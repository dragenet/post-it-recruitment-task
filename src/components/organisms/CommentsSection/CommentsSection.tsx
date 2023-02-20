import { Button, Collapse, Grid } from '@mui/material';
import { useToggle } from '~/utils/useToggle';
import { CommentsSectionContent } from '~/components/molecules/CommentsSectionContent';
import { useContextState } from '~/store';

export const CommentsSection = () => {
  const { currentPost, comments } = useContextState();
  const [isOpen, toggle] = useToggle();

  if (!currentPost) return null;

  return (
    <Grid container direction="column" alignItems="center">
      {isOpen && (
        <Collapse in={isOpen}>
          <CommentsSectionContent comments={comments[currentPost.id]} />
        </Collapse>
      )}

      <Grid item>
        <Button onClick={toggle}>{`${
          isOpen ? 'Hide' : 'Show'
        } comments`}</Button>
      </Grid>
    </Grid>
  );
};
