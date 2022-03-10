import { Typography, Box } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import StyledNavLink from '../../navbar/navbar-navlink-styled';
import { selectAuth } from '../../store/auth';
import HomePageUserListing from './home-page-listing';
import HomePageUserOrder from './home-page-order';

const HomePage = () => {
  const { loggedIn, user } = useSelector(selectAuth);

  let helloMessage = '';

  if (loggedIn) {
    helloMessage = user.username;
  } else {
    helloMessage = 'Stranger';
  }

  return (
    <>
      <Typography variant="h3" textAlign="center" sx={{ my: 2 }}>
        Hello
        {' '}
        {helloMessage}
      </Typography>
      {loggedIn
        ? (
          <>
            <HomePageUserListing />
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 5 }}>
              <StyledNavLink sx={{ mt: 5 }} to="/create-listing">
                <Typography variant="h6" textAlign="center">Create item listing</Typography>
              </StyledNavLink>
            </Box>
            <HomePageUserOrder />
          </>
        )
        : (
          <>
            <Typography variant="h5" sx={{ mt: 5 }} textAlign="center">To access more, please log in, or register. You can still browse shop</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <StyledNavLink sx={{ mt: 5 }} to="/login">
                <Typography variant="h6" textAlign="center">Login</Typography>
              </StyledNavLink>
              <StyledNavLink sx={{ mt: 5 }} to="/register">
                <Typography variant="h6" textAlign="center">Register</Typography>
              </StyledNavLink>
            </Box>
          </>
        )}
    </>
  );
};

export default HomePage;
