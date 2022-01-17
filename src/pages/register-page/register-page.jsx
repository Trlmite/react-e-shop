import { Box, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MainButton from '../../components/button/main-button';

const RegisterPage = () => {
  const [username, setUserName] = useState('');
  const [password, setUserPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setUserPassword(e.target.value);
  };

  const handleRepeatedPasswordChange = (e) => {
    setRepeatedPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      username, password, repeatedPassword, name, surname, email, city,
    });
  };
  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: '10vh',
        margin: (5, 'auto'),
      }}
      onSubmit={handleSubmit}
    >
      <Typography variant="h5">Register</Typography>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      >
        <Box>
          <InputLabel htmlFor="username-login" sx={{ fontWeight: 600, my: 0.5 }}>Username</InputLabel>
          <TextField
            sx={{ my: 1 }}
            fullWidth
            id="username-login"
            value={username}
            onChange={handleUserNameChange}
          />
        </Box>
        <Box sx={{ mx: 2 }}>
          <InputLabel htmlFor="password-register" sx={{ fontWeight: 600, my: 0.5 }}>Password</InputLabel>
          <TextField
            sx={{ my: 1 }}
            fullWidth
            id="password-register"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </Box>
        <Box>
          <InputLabel htmlFor="password-register-repeat" sx={{ fontWeight: 600, my: 0.5 }}>Repeat password</InputLabel>
          <TextField
            sx={{ my: 1 }}
            fullWidth
            id="password-register repeat"
            type="password"
            value={repeatedPassword}
            onChange={handleRepeatedPasswordChange}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box>
          <InputLabel htmlFor="email-register" sx={{ fontWeight: 600, my: 0.5 }}>Email</InputLabel>
          <TextField
            sx={{ my: 1 }}
            fullWidth
            id="email-register"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </Box>
        <Box sx={{ mx: 2 }}>
          <InputLabel htmlFor="name-register" sx={{ fontWeight: 600, my: 0.5 }}>Name</InputLabel>
          <TextField
            sx={{ my: 1 }}
            fullWidth
            id="name-register"
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </Box>
        <Box>
          <InputLabel htmlFor="surname-register" sx={{ fontWeight: 600, my: 0.5 }}>Surname</InputLabel>
          <TextField
            sx={{ my: 1 }}
            fullWidth
            id="surname-register"
            type="text"
            value={surname}
            onChange={handleSurnameChange}
          />
        </Box>
      </Box>
      <InputLabel htmlFor="city-register" sx={{ fontWeight: 600, my: 0.5 }}>City</InputLabel>
      <TextField
        sx={{ my: 1 }}
        id="city-register"
        type="text"
        value={city}
        onChange={handleCityChange}
      />
      <MainButton
        type="submit"
        sx={{
          my: 1, p: ('15px'), width: '10vw', fontWeight: 600, textAlign: 'center',
        }}
      >
        Register
      </MainButton>
    </Box>
  );
};

export default RegisterPage;
