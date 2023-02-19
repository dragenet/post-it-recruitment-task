import {
  IconButton,
  ListItem as ListItemBase,
  ListItemButton,
  ListItemIcon,
  ListItemProps as ListItemBaseProps,
  Typography,
} from '@mui/material';
import { ListItemProps } from './constants';
import DeleteIcon from '@mui/icons-material/Delete';
import truncate from 'truncate';
import { useMutations } from '~/store/mutations';

export const PostListItem = ({
  post,
  ...props
}: ListItemProps & ListItemBaseProps) => {
  const { removePost } = useMutations();
  return (
    <ListItemBase {...props} dense>
      <ListItemIcon>
        <IconButton
          edge="end"
          aria-label="comments"
          onClick={() => removePost(post.id)}
        >
          <DeleteIcon />
        </IconButton>
      </ListItemIcon>
      <ListItemButton>
        <Typography marginX="auto" textAlign="center">
          {truncate(post.title, 50)}
        </Typography>
      </ListItemButton>
    </ListItemBase>
  );
};
