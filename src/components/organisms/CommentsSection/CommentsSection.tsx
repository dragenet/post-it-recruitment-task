import { Button, Collapse, Grid, List, Typography } from '@mui/material';
import { useToggle } from '~/utils/useToggle';
import * as C from './constants';
import { CommentItem } from '~/components/molecules/CommentItem';

export const CommentsSection = ({ comments }: C.CommentsSectionProps) => {
  const [isOpen, toggle] = useToggle();
  return (
    <Grid container direction="column" alignItems="center">
      {isOpen && (
        <Collapse in={isOpen}>
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
