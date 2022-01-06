import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import {
  Box,
  Toolbar,
  Typography,
  Button,
} from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="sticky" color="primary">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            kinda works
          </Typography>
          <Link to="/">
            <Typography variant="h6" sx={{ mx: 1 }}>Home</Typography>
          </Link>
          <Link to="/items">
            <Typography variant="h6" sx={{ mx: 1 }}>Items</Typography>
          </Link>
          <Link to="/cart">
            <Typography variant="h6">Cart</Typography>
          </Link>
        </Box>
        <Box>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Register</Button>
        </Box>
      </Toolbar>
    </AppBar>
  </Box>
);

export default NavBar;
