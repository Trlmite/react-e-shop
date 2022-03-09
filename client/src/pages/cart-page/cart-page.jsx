/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import CartPageList from './cart-page-list';
import APIService from '../../services/api-service';


// neveikia ????
const CartPage = () => {
  const [cart, setCart] = useState([]);
  
  
  const handleUpdateClick = (id) => {
    const findCart = cart.find((x) => x.productId === id);
    console.log(findCart.productId);
  };

  const handleDeleteClick = async (id) => {
     const { status } = await APIService.deleteCartItem(id);
     if(status === 200) {
        const newCart = cart.filter(x => x.productId !== id)
        return setCart(newCart)
     }
  };
  
  useEffect(() => {
    (async () => {
      const fetchedCarts = await APIService.fetchCarts();
      setCart(fetchedCarts.cart.products);
    })();
  }, [cart]);

  return (
    <Box sx={{ py: 2 }}>
      <Typography variant="h4" textAlign="center">
        Your cart
      </Typography>
      <CartPageList
        cart={cart}
        handleUpdateClick={handleUpdateClick}
        handleUserDeleteClick={handleDeleteClick}
      />
    </Box>
  );
};

export default CartPage;
