import { styled } from '@mui/material';
import { ButtonUnstyled } from '@mui/base';

const MainButton = styled(ButtonUnstyled)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: theme.spacing(1, 2),
  borderRadius: (10, 15),
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  cursor: 'pointer',
  ':hover': {
    background: theme.palette.secondary.main,
    color: theme.palette.primary.dark,
  },
}));

export default MainButton;
