import { setIsAddPostModalOpen, useContextStore } from '~/store';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { useMutations } from '~/store/mutations';
import {
  AddPostForm,
  AddPostFormFields,
} from '~/components/organisms/AddPostForm';

export const AddPostDialog = () => {
  const { state, dispatch } = useContextStore();
  const { addPost } = useMutations();
  const { isAddPostsModalOpen } = state;

  const handleClose = () => dispatch(setIsAddPostModalOpen(false));

  const handleSubmit = (data: AddPostFormFields) => {
    if (state?.currentUser) {
      addPost({ userId: state?.currentUser?.id, ...data });
      handleClose();
    }
  };

  if (!state.currentUser) return null;

  return (
    <Dialog open={isAddPostsModalOpen} onClose={handleClose}>
      <DialogTitle textAlign="center">Add posts</DialogTitle>

      <DialogContent>
        <AddPostForm onSubmit={handleSubmit} />
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit" variant="contained">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};
