/* eslint-disable */ 
import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import CartPageList from './cart-page-list';
import APIService from '../../services/api-service';

const CartPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      const fetchedItems = await APIService.fetchItems();
      setItems(fetchedItems);
    })();
  }, []);

  return (
    <Box sx={{ py: 2 }}>
      <Typography variant="h4" textAlign="center">
        Your cart
      </Typography>
      <CartPageList 
      items={cartItem.foundItem}
      />
    </Box>
  );
};

export default CartPage;
