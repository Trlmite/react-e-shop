import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import APIService from '../../services/api-service';

import ItemPageGridCard from './item-page-grid-card';
import ItemsGridGrid from './items-page-grid-layout';

const ItemPageGrid = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      const fetchedItems = await APIService.fetchedItems();
      setItems(fetchedItems);
    })();
  }, []);

  return (
    <Box>
      <ItemsGridGrid>
        {items.map((item) => (
          <ItemPageGridCard
            key={item.id}
            {...item}
          />
        ))}
      </ItemsGridGrid>
    </Box>
  );
};

export default ItemPageGrid;
