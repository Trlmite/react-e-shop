import { Box, TextField, Typography } from '@mui/material';
import React from 'react';
import MainButton from '../../components/button/main-button';

const LoginPage = () => (
  <Box
    component="form"
    sx={{
      mb: 3,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      pt: '5vh',
    }}
    onSubmit={() => { console.log('veikia'); }}
  >
    <Typography>LOGIN PAGE</Typography>
    <TextField />
    <TextField />
    <MainButton type="submit"> Log In !</MainButton>
  </Box>
);

export default LoginPage;
