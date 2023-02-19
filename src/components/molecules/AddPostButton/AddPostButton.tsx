import { IconButton, IconButtonProps } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export const AddPostButton = (props: IconButtonProps) => {
  return (
    <IconButton
      size="large"
      color="inherit"
      aria-label="back"
      sx={{ mr: 2 }}
      {...props}
    >
      <AddIcon />
    </IconButton>
  );
};
