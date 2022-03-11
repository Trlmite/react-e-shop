/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import CartPageList from './cart-page-list';
import APIService from '../../services/api-service';
import MainButton from '../../components/button/main-button'


const CartPage = () => {
  const [cart, setCart] = useState([]);

  const handleUpdateClick = (id) => {
    const findCart = cart.find((x) => x.productId === id);
    console.log(findCart.productId);
  };
  const handleDeleteClick = async (id) => {
    try { 
      await APIService.deleteCartItem(id);
      await fetchCarts();
    }
    catch (error) {
      throw new Error (error)
    };
  };
  const fetchCarts = async () => {
      const fetchedCarts = await APIService.fetchCarts();
      console.log(fetchedCarts)
      if(fetchedCarts.hasOwnProperty('message')){
        setCart([])
      } else {
        setCart(fetchedCarts.cart.products);
      }
  }

  let isEmpty = false;
  if (cart.length === 0) {
    isEmpty = true;
  } else {
    isEmpty = false;
  }
  
  useEffect(fetchCarts, []);

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
      {!isEmpty
      ? (
      <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 2}}>
        <MainButton>Order Cart</MainButton>
        <MainButton>Delete Cart</MainButton>
      </Box>
      )
      : null
      }
    </Box>
  );
};

export default CartPage;
