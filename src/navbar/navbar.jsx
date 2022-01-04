import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import {
  Box,
  Toolbar,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Input,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
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
            <Typography variant="h6">Items</Typography>
          </Link>
        </Box>
        <Box>
          <Input
            id="search"
            label="Search for..."
            startAdornment={(
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            )}
          />
        </Box>
        <Box>
          <TextField
            label="Email"
            id="userEmail"
            size="small"
          />
          <TextField
            label="Password"
            id="userPassword"
            size="small"
          />
          <Button color="inherit">Login</Button>
        </Box>
      </Toolbar>
    </AppBar>
  </Box>
);

export default NavBar;
