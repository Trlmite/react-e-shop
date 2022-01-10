import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import {
  Box,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import MainButton from '../components/button/main-button';

const NavBar = () => {
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', bgcolor: theme.palette.primary.main }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <MainButton>
              <NavLink to="/" style={{ textDecoration: 'none' }}>
                <Typography variant="h6" sx={{ mx: 1 }}>Home</Typography>
              </NavLink>
            </MainButton>
            <MainButton>
              <NavLink to="/items" style={{ textDecoration: 'none' }}>
                <Typography variant="h6" sx={{ mx: 1 }}>Items</Typography>
              </NavLink>
            </MainButton>
            <MainButton>
              <NavLink to="/cart" style={{ textDecoration: 'none' }}>
                <Typography variant="h6">Cart</Typography>
              </NavLink>
            </MainButton>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <MainButton>
              <NavLink to="/login">
                <Typography variant="h6" sx={{ mx: 1 }}>Login</Typography>
              </NavLink>
            </MainButton>
            <MainButton>
              <NavLink to="/register">
                <Typography variant="h6" sx={{ mx: 1 }}>Register</Typography>
              </NavLink>
            </MainButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
