import { styled } from '@mui/material';
import { ButtonUnstyled } from '@mui/base';

const mainButton = styled(ButtonUnstyled)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: theme.spacing(1.5, 2),
  borderRadius: (10, 15),
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  cursor: 'pointer',
  ':hover': {
    color: theme.palette.primary.dark,
  },
}));

export default mainButton;
