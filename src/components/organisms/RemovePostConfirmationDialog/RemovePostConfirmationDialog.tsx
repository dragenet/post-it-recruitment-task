import { useContextState } from '~/store';
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';
import { useMutations } from '~/store/mutations';

export const RemovePostConfirmationDialog = () => {
  const { postToRemoveId } = useContextState();
  const { removePost, removePostWithConfirmationModal } = useMutations();

  const handleClose = () => removePostWithConfirmationModal(null);
  const handleRemove = () => {
    console.log(postToRemoveId);
    if (postToRemoveId) {
      removePost(postToRemoveId);
      handleClose();
    }
  };

  return (
    <Dialog open={postToRemoveId !== null} onClose={handleClose}>
      <DialogTitle>Are you sure you want remove this post?</DialogTitle>

      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button variant="contained" onClick={handleRemove}>
          Remove
        </Button>
      </DialogActions>
    </Dialog>
  );
};
