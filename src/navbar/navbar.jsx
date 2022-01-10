import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import {
  Box,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import { Link } from 'react-router-dom';
import MainButton from '../components/button/main-button';

const NavBar = () => {
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', bgcolor: theme.palette.primary.main }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <MainButton sx={{ bgcolor: theme.palette.primary.light }}>
                <Typography variant="h6" sx={{ mx: 1 }}>Home</Typography>
              </MainButton>
            </Link>
            <MainButton>
              <Link to="/items" underline="none">
                <Typography variant="h6" sx={{ mx: 1 }}>Items</Typography>
              </Link>
            </MainButton>
            <MainButton>
              <Link to="/cart" underline="none">
                <Typography variant="h6">Cart</Typography>
              </Link>
            </MainButton>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <MainButton>
              <Link to="/login">
                <Typography variant="h6" sx={{ mx: 1 }}>Login</Typography>
              </Link>
            </MainButton>
            <MainButton>
              <Link to="/register">
                <Typography variant="h6" sx={{ mx: 1 }}>Register</Typography>
              </Link>
            </MainButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
