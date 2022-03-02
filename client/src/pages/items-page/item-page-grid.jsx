import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import APIService from '../../services/api-service';

import ItemPageGridCard from './item-page-grid-card';
import ItemsGridGridCopy from './items-page-grid-layout';

const ItemPageGrid = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      const fetchedItems = await APIService.fetchItems();
      console.log(fetchedItems);
      setItems(fetchedItems);
    })();
  }, []);

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
