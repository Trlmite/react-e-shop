import { Box, Typography } from '@mui/material';
import React from 'react';
import MainButton from '../../components/button/main-button';

import ItemCreationComponent from '../../components/item-create-component/item-create-component';

const HomePage = () => (
  <Box sx={{ mx: 2, my: 2 }}>
    <Typography>
      Krabauskis Namu Puslapiauskiss
    </Typography>
    <ItemCreationComponent />
    <MainButton>
      <Typography>
        Main button
      </Typography>
    </MainButton>
  </Box>
);

export default HomePage;
