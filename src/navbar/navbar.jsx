import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import {
  Box,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import StyledNavLink from './navbar-navlink-styled';

const NavBar = () => {
  const theme = useTheme();

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
            <StyledNavLink to="/cart">
              <Typography variant="h6">Cart</Typography>
            </StyledNavLink>

          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

            <StyledNavLink to="/login">
              <Typography variant="h6">Login</Typography>
            </StyledNavLink>

            <StyledNavLink to="/register">
              <Typography variant="h6">Register</Typography>
            </StyledNavLink>

          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
