import { setIsAddPostModalOpen, useContextStore } from '~/store';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextareaAutosize,
  TextField,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import * as C from './constants';
import { useMutations } from '~/store/mutations';

export const AddPostDialog = () => {
  const { state, dispatch } = useContextStore();
  const { addPost } = useMutations();
  const { isAddPostsModalOpen } = state;

  const { register, handleSubmit } = useForm<C.AddPostFormFields>();

  const handleClose = () => dispatch(setIsAddPostModalOpen(false));

  const onSubmit = (data: C.AddPostFormFields) => {
    console.log('newPost', data);
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
        <Box component="form" onSubmit={handleSubmit(onSubmit)} marginTop={1}>
          <TextField
            id="title"
            label="Title"
            sx={{ minWidth: '100%', marginBottom: '1em' }}
            {...register('title', { required: true })}
          />

          <TextareaAutosize
            id="content"
            style={{ minWidth: '100%', minHeight: '200px' }}
            {...register('body', { required: true })}
          />
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" variant="contained">
              Add
            </Button>
          </DialogActions>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
