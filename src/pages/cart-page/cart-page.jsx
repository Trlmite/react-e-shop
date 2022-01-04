import { Box, Typography } from '@mui/material';
import React from 'react';
import CartPageList from './cart-page-list';

const CartPage = () => (
  <Box sx={{ py: 2 }}>
    <Typography variant="h4" textAlign="center">
      Your cart
    </Typography>
    <CartPageList />
  </Box>
);

export default CartPage;
