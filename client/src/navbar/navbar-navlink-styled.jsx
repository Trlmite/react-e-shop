import { styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: theme.spacing(1, 1.5),
  borderRadius: (10, 15),
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  textDecoration: 'none',
  margin: theme.spacing(0, 1),
  cursor: 'pointer',
  ':hover': {
    color: theme.palette.common.black,
    background: theme.palette.primary.light,
  },
  '&.active': {
    background: theme.palette.secondary.main,
    color: theme.palette.primary.dark,
  },
}));

export default StyledNavLink;
