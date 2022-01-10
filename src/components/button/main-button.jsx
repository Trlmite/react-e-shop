import { styled } from '@mui/material';
import { ButtonUnstyled } from '@mui/base';

const MainButton = styled(ButtonUnstyled)(({ theme }) => ({
  background: theme.palette.primary.light,
  color: theme.palette.common.white,
  padding: theme.spacing(1, 1),
  borderRadius: (10, 15),
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  cursor: 'pointer',
  ':hover': {
    color: theme.palette.common.black,
  },
}));

export default MainButton;
