import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import StyledNavLink from './navbar-navlink-styled';
import { logout, selectAuth } from '../store/auth';

const NavBar = () => {
  const { loggedIn } = useSelector(selectAuth);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const theme = useTheme();

  const handleLogOut = () => {
    dispatch(logout());
    if (pathname !== '/') {
      navigate('/');
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', bgcolor: theme.palette.primary.main }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <StyledNavLink to="/">
              <Typography variant="h6">Home</Typography>
            </StyledNavLink>
            <StyledNavLink to="/items">
              <Typography variant="h6">Items</Typography>
            </StyledNavLink>
            {loggedIn
              ? (
                <StyledNavLink to="/cart">
                  <Typography variant="h6">Cart</Typography>
                </StyledNavLink>
              )
              : null}
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {loggedIn
              ? (
                <StyledNavLink
                  to="/"
                  onClick={handleLogOut}
                >
                  <Typography variant="h6">Logout</Typography>
                </StyledNavLink>
              )
              : (
                <>
                  <StyledNavLink to="/login">
                    <Typography variant="h6">Login</Typography>
                  </StyledNavLink>
                  <StyledNavLink to="/register">
                    <Typography variant="h6">Register</Typography>
                  </StyledNavLink>
                </>
              )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
