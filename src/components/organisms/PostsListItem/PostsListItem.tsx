import {
  IconButton,
  ListItem as ListItemBase,
  ListItemButton,
  ListItemIcon,
  Typography,
} from '@mui/material';
import { ListItemProps } from './constants';
import DeleteIcon from '@mui/icons-material/Delete';
import truncate from 'truncate';
import { useRouter } from 'next/router';
import { paths } from '~/config/paths';

export const PostsListItem = ({ post, onRemove }: ListItemProps) => {
  const router = useRouter();

  return (
    <>
      <ListItemBase dense>
        <ListItemIcon>
          <IconButton edge="end" aria-label="comments" onClick={onRemove}>
            <DeleteIcon />
          </IconButton>
        </ListItemIcon>

        <ListItemButton
          onClick={() =>
            router.push({ pathname: paths.postDetails, query: { id: post.id } })
          }
        >
          <Typography marginX="auto" textAlign="center">
            {truncate(post.title, 50)}
          </Typography>
        </ListItemButton>
      </ListItemBase>
    </>
  );
};
