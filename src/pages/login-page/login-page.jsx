import { Box, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MainButton from '../../components/button/main-button';

const LoginPage = () => {
  const [username, setUserName] = useState('');
  const [password, setUserPassword] = useState('');

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
    console.log({ username, password });
  };
  const handleUserPasswordChange = (e) => {
    setUserPassword(e.target.value);
    console.log({ username, password });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('veikia');
  };
  return (
    <Box
      component="form"
      sx={{
        mb: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: '6vh',
      }}
      onSubmit={handleSubmit}
    >
      <Typography>LOGIN PAGE</Typography>
      <InputLabel htmlFor="username">Username</InputLabel>
      <TextField
        id="username"
        value={username}
        onChange={handleUserNameChange}
      />
      <InputLabel htmlFor="password">Password</InputLabel>
      <TextField
        id="password"
        type="password"
        value={password}
        onChange={handleUserPasswordChange}
      />
      <MainButton type="submit"> Log In !</MainButton>
    </Box>
  );
};

export default LoginPage;
