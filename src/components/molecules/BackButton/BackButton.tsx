import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/router';

export const BackButton = () => {
  const router = useRouter();
  return (
    <IconButton
      size="large"
      color="inherit"
      aria-label="back"
      sx={{ mr: 2 }}
      onClick={() => router.back()}
    >
      <ArrowBackIcon />
    </IconButton>
  );
};
