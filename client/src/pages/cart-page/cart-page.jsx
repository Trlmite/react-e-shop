/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import CartPageList from './cart-page-list';
import APIService from '../../services/api-service';


// neveikia ????
const CartPage = () => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    (async () => {
      const fetchedCarts = await APIService.fetchCarts();
      setCarts(fetchedCarts);
    })();
  }, []);

  const handleUpdateClick = (id) => {
    const findCart = carts.find((x) => x.id === id);
    console.log(findCart);
  };

  console.log(carts);

  return (
    <Box sx={{ py: 2 }}>
      <Typography variant="h4" textAlign="center">
        Your cart
      </Typography>
      {/* <CartPageList
        carts={carts}
        handleUpdateClick={handleUpdateClick}
      /> */}
    </Box>
  );
};

export default CartPage;
