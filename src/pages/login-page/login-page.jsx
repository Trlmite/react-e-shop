import { Box, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MainButton from '../../components/button/main-button';

const LoginPage = () => {
  const [username, setUserName] = useState('');
  const [password, setUserPassword] = useState('');

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handleUserPasswordChange = (e) => {
    setUserPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, password });
  };
  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyItems: 'center',
        pt: '20vh',
        width: '25vw',
        margin: (5, 'auto'),
      }}
      onSubmit={handleSubmit}
    >
      <Typography variant="h5">Please log in!</Typography>
      <InputLabel htmlFor="username-login" sx={{ fontWeight: 600, my: 1 }}>Username</InputLabel>
      <TextField
        sx={{ my: 1 }}
        fullWidth
        id="username-login"
        value={username}
        onChange={handleUserNameChange}
      />
      <InputLabel htmlFor="password-login" sx={{ fontWeight: 600, my: 1 }}>Password</InputLabel>
      <TextField
        sx={{ my: 1 }}
        fullWidth
        id="password-login"
        type="password"
        value={password}
        onChange={handleUserPasswordChange}
      />
      <MainButton
        type="submit"
        sx={{
          my: 1, p: ('15px'), width: '10vw', fontWeight: 600, textAlign: 'center',
        }}
      >
        {' '}
        Log In !
      </MainButton>
    </Box>
  );
};

export default LoginPage;
