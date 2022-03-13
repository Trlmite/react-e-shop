import { Box } from '@mui/material';
import React, { useContext } from 'react';
// import APIService from '../../services/api-service';

import { itemFilterContext } from './context/item-filter-context';
import ItemPageGridCard from './item-page-grid-card';
import ItemsGridGridCopy from './items-page-grid-layout';

const ItemPageGrid = () => {
  const { items } = useContext(itemFilterContext);

  return (
    <Box sx={{ my: 2 }}>
      <ItemsGridGridCopy>
        {items.map((item) => (
          <ItemPageGridCard
            key={item.id}
            id={item.id}
            {...item}
          />
        ))}
      </ItemsGridGridCopy>
    </Box>
  );
};

export default ItemPageGrid;
