import { Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../navbar/navbar';

const PageLayout = () => (
  <>
    <NavBar />
    <Container
      element="main"
      maxWidth="xl"
      disableGutters="true"
    >
      <Outlet />
    </Container>
  </>
);

export default PageLayout;
