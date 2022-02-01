import { Typography, Box } from '@mui/material';
import React from 'react';
import CreateListingInput from './create-listing-input';

const CreateListingPage = () => {
  const pageName = 'create-Listing-Page';

  return (
    <Box>
      <Typography variant="h5" textAlign="center">{pageName}</Typography>
      <Box>
        <CreateListingInput />
      </Box>
    </Box>
  );
};

export default CreateListingPage;
