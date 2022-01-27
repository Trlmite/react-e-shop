import { Box, TextField, Typography } from '@mui/material';
import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Grid from '@mui/material/Grid';
import MainButton from '../../components/button/main-button';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object({
  username: yup
    .string('Enter username')
    .required('Must enter username'),
  password: yup
    .string()
    .required('Must enter password'),
});

const LoginPage = () => {
  const {
    values, errors, touched, isValid, dirty,
    handleChange, handleBlur,
  } = useFormik({
    initialValues,
    validationSchema,
  });

  console.log({ isValid, dirty });

  const handleLogIn = (e) => {
    e.preventDefault();
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
        margin: (5, 'auto'),
      }}
    >
      <Grid
        container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyItems: 'center',
        }}
        xs={10}
        sm={8}
        md={6}
        lg={4}
      >
        <Grid
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyItems: 'center',
            width: '100%',
          }}
        >
          <Typography variant="h5">Please log in!</Typography>
          <InputLabel htmlFor="username" sx={{ fontWeight: 600, my: 1 }}>Username</InputLabel>
          <TextField
            sx={{ my: 1 }}
            fullWidth
            id="username"
            /* props by formik */
            error={touched.username && Boolean(errors.username)}
            helperText={touched.username && errors.username}
            name="username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <InputLabel htmlFor="password" sx={{ fontWeight: 600, my: 1 }}>Password</InputLabel>
          <TextField
            sx={{ my: 1 }}
            fullWidth
            id="password"
            type="password"
            /* props by formik */
            name="password"
            value={values.password}
            onChange={handleChange}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
            onBlur={handleBlur}
          />
          <MainButton
            type="submit"
            sx={{
              my: 1, p: ('15px'), width: '10vw', fontWeight: 600, textAlign: 'center',
            }}
            onClick={handleLogIn}
            disabled={!isValid && !dirty}
          >
            {' '}
            Log In !
          </MainButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginPage;
