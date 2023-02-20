import {
  Box,
  Button,
  DialogActions,
  TextareaAutosize,
  TextField,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import * as C from './constants';

export const AddPostForm = ({ onSubmit, onClose }: C.AddPostFormProps) => {
  const { register, handleSubmit } = useForm<C.AddPostFormFields>();

  return (
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
        <Button onClick={onClose}>Cancel</Button>
        <Button type="submit" variant="contained">
          Add
        </Button>
      </DialogActions>
    </Box>
  );
};
