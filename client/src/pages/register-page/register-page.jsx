import { Box, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Grid from '@mui/material/Grid';
import MainButton from '../../components/button/main-button';
import APIService from '../../services/api-service';

const initialValues = {
  username: '',
  password: '',
  passwordRepeat: '',
  email: '',
  name: '',
  surname: '',
  city: '',
};

const validationSchema = yup.object({
  username: yup
    .string()
    .required('Must be filled')
    .min(2, 'At least 2 letters'),
  password: yup
    .string()
    .required('Must be filled')
    .min(8, 'At least 8 letters')
    .max(32, '32 letters maximum')
    .matches(/^.*[A-ZĄČĘĖĮŠŲŪŽ]+.*$/, 'Should contain Capital letter')
    .matches(/^.*[0-9]+.*$/, 'Should contain number'),
  repeatPassword: yup
    .string()
    .required('Must be filled')
    .oneOf([yup.ref('password')], 'Passwords do not match'),
  email: yup
    .string()
    .required('Must be filled')
    .email('Is not valid email'),
  name: yup
    .string()
    .required('Must be filled')
    .min(2, 'At least 2 letters')
    .matches(/^[a-zA-ZąčęėįšųūžĄČĘĖĮŠŲŪŽ]+$/, 'Should only contain letters'),
  surname: yup
    .string()
    .required('Must be filled')
    .min(2, 'At least 2 letters')
    .matches(/^[a-zA-ZąčęėįšųūžĄČĘĖĮŠŲŪŽ]+$/, 'Should only contain letters'),
  city: yup
    .string()
    .required('Must be filled'),
});

const RegisterPage = () => {
  const [logError, setLogError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async ({
    username,
    password,
    repeatPassword,
    email,
    name,
    surname,
    city,
  }) => {
    try {
      setLogError('');
      await APIService.register({
        username,
        password,
        repeatPassword,
        email,
        name,
        surname,
        city,
      });
      navigate('/');
    } catch (error) {
      setLogError(error.response.data.message);
    }
  };
  const {
    values, errors, touched, isValid, dirty,
    handleChange, handleBlur, handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleRegister,
  });

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
      <Grid
        container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyItems: 'center',
        }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>Register</Typography>
        {logError ? <Typography variant="h5" sx={{ color: 'red' }}>{logError}</Typography> : null}
        <Grid
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          xs={12}
          sm={10}
          md={8}
          lg={6}
          direction={{ xs: 'column', sm: 'column', lg: 'row' }}
        >
          <Box>
            <InputLabel htmlFor="username" sx={{ fontWeight: 600, my: 0.5, textAlign: 'center' }}>Username</InputLabel>
            <TextField
              sx={{ my: 1 }}
              fullWidth
              id="username"
              type="text"
              name="username"
              /* props by formik */
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.username && Boolean(errors.username)}
              helperText={touched.username && Boolean(errors.username)
                ? errors.username
                : ' '}
            />
          </Box>
          <Box sx={{ my: 2 }}>
            <InputLabel htmlFor="password" sx={{ fontWeight: 600, my: 0.5, textAlign: 'center' }}>Password</InputLabel>
            <TextField
              sx={{ my: 1 }}
              fullWidth
              id="password"
              type="password"
              name="password"
              /* props by formik */
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && Boolean(errors.password)
                ? errors.password
                : ' '}
            />
          </Box>
          <Box>
            <InputLabel htmlFor="repeatPassword" sx={{ fontWeight: 600, my: 0.5, textAlign: 'center' }}>Repeat password</InputLabel>
            <TextField
              sx={{ my: 1 }}
              fullWidth
              id="repeatPassword"
              type="password"
              name="repeatPassword"
              /* props by formik */
              value={values.repeatPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.repeatPassword && Boolean(errors.repeatPassword)}
              helperText={touched.repeatPassword && Boolean(errors.repeatPassword)
                ? errors.repeatPassword
                : ' '}
            />
          </Box>
        </Grid>

        <Grid
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          xs={12}
          sm={10}
          md={8}
          lg={6}
          direction={{ xs: 'column', sm: 'column', lg: 'row' }}
        >

          <Box>
            <InputLabel htmlFor="email" sx={{ fontWeight: 600, my: 0.5, textAlign: 'center' }}>Email</InputLabel>
            <TextField
              sx={{ my: 1 }}
              fullWidth
              id="email"
              type="email"
              name="email"
              /* props by formik */
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && Boolean(errors.email)
                ? errors.email
                : ' '}
            />
          </Box>
          <Box sx={{ my: 2 }}>
            <InputLabel htmlFor="name" sx={{ fontWeight: 600, my: 0.5, textAlign: 'center' }}>Name</InputLabel>
            <TextField
              sx={{ my: 1 }}
              fullWidth
              id="name"
              type="text"
              name="name"
              /* props by formik */
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && Boolean(errors.name)
                ? errors.name
                : ' '}
            />
          </Box>
          <Box>
            <InputLabel htmlFor="surname" sx={{ fontWeight: 600, my: 0.5, textAlign: 'center' }}>Surname</InputLabel>
            <TextField
              sx={{ my: 1 }}
              fullWidth
              id="surname"
              type="text"
              name="surname"
              /* props by formik */
              value={values.surname}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.surname && Boolean(errors.surname)}
              helperText={touched.surname && Boolean(errors.surname)
                ? errors.surname
                : ' '}
            />
          </Box>
        </Grid>
        <Grid
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          xs={12}
          sm={10}
          md={8}
          lg={6}
          direction={{ xs: 'column', sm: 'column', lg: 'row' }}
        >
          <Box>
            <InputLabel htmlFor="city" sx={{ fontWeight: 600, my: 0.5, textAlign: 'center' }}>City</InputLabel>
            <TextField
              sx={{ my: 1.5 }}
              id="city"
              type="text"
              name="city"
              /* props by formik */
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.city && Boolean(errors.city)}
              helperText={touched.city && Boolean(errors.city)
                ? errors.city
                : ' '}
            />
          </Box>
        </Grid>
        <MainButton
          type="submit"
          sx={{
            my: 1, p: ('15px'), minWidth: '100px', fontWeight: 600, textAlign: 'center',
          }}
          disabled={!isValid && !dirty}
          onSubmit={handleSubmit}
        >
          Register
        </MainButton>
      </Grid>
    </Box>
  );
};

export default RegisterPage;
