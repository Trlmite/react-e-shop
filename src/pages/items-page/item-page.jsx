import React from 'react';
import {
  Box,
  Grid,
} from '@mui/material';

import ItemPageGrid from './item-page-grid';
import ItemPageFilter from './item-page-filter';

const ItemPage = () => (
  <Box sx={{ px: 2, py: 2, width: '100%' }}>
    <Grid container>
      <Grid item xs={2} sx={{ display: 'flex' }}>
        <ItemPageFilter />
      </Grid>
      <Grid item xs={10}>
        <ItemPageGrid sx={{ mx: 1 }} />
      </Grid>
    </Grid>
  </Box>
);

export default ItemPage;
