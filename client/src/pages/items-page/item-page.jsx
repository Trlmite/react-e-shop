import React from 'react';
import {
  Box,
  Grid,
} from '@mui/material';

import ItemPageGrid from './item-page-grid';
import ItemPageFilter from './item-page-filter';

const ItemPage = () => (
  <Box sx={{ px: 2, py: 2, width: '100%' }}>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={3} lg={2} sx={{ display: 'flex' }}>
        <ItemPageFilter />
      </Grid>
      <Grid item xs={12} sm={10} md={8} lg={10}>
        <ItemPageGrid />
      </Grid>
    </Grid>
  </Box>
);

export default ItemPage;
