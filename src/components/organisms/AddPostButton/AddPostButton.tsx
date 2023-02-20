import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useMutations } from '~/store/mutations';

export const AddPostButton = () => {
  const { setIsAddPostModalOpen } = useMutations();

  return (
    <IconButton
      size="large"
      color="inherit"
      aria-label="back"
      sx={{ mr: 2 }}
      onClick={() => setIsAddPostModalOpen(true)}
    >
      <AddIcon />
    </IconButton>
  );
};
