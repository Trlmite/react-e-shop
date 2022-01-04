import { Box, Typography } from '@mui/material';
import React from 'react';

import ItemCreationComponent from '../../components/item-create-component/item-create-component';

const HomePage = () => (
  <Box sx={{ mx: 2, my: 2 }}>
    <Typography>
      Krabauskis Namu Puslapiauskiss
    </Typography>
    <ItemCreationComponent />
  </Box>
);

export default HomePage;
