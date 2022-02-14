import { Box, Typography } from '@mui/material';
import React from 'react';
import FilterPageBox from './item-page-filter-styled';
import FiltersGrouped from './item-page-filters/item-page-filters-grouped';

const ItemPageFilter = () => (
  <FilterPageBox>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ mb: 1 }}>
        <Typography variant="h5" align="center" sx={{ width: '100%' }}>Filters</Typography>
      </Box>
      <Box>
        <FiltersGrouped />
      </Box>
    </Box>
  </FilterPageBox>
);

export default ItemPageFilter;
