import { Typography, Box } from '@mui/material';
import React from 'react';
import ItemCreationComponent from '../../components/item-create-component/item-create-component';

const CreateListingPage = () => {
  const pageName = 'PAGE_NAME';

  return (
    <Box>
      <Typography>{pageName}</Typography>
      <ItemCreationComponent />
    </Box>
  );
};

export default CreateListingPage;
