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
import { useRouter } from 'next/router';
import { paths } from '~/config/paths';

export const PostListItem = ({
  post,
  ...props
}: ListItemProps & ListItemBaseProps) => {
  const router = useRouter();
  const { removePost } = useMutations();

  const handleRemoveClick = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    removePost(post.id);
  };
  return (
    <ListItemBase {...props} dense>
      <ListItemIcon>
        <IconButton
          edge="end"
          aria-label="comments"
          onClick={handleRemoveClick}
        >
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
  );
};
