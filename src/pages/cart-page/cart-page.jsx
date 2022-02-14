/* eslint-disable */ 
import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import CartPageList from './cart-page-list';
import APIService from '../../services/api-service';

const carts = [
  {
    id: '1',
    userId: '20',
  },
  {
    id: '2',
    userId: '15',
  },
];
const cartProducts = [
  {
    id: '2',
    cartId: '1',
    productId: '6',
    count: '1',
  },
  {
    id: '3',
    cartId: '2',
    productId: '4',
    count: '1',
  },
];
const userId = '20';


const findCartItems = (
  id, carts,cartProducts, items
) => {
  const findCart = carts.find((cart) => cart.userId === id);
  const findCartProducts = cartProducts.find((product) => product.cartId === findCart.id)
  const foundItem = items.filter((item) => item.id === findCartProducts.productId)
  const cartListData = {
    foundItem,
    quantity: findCartProducts.count
  }
  return cartListData
};

const CartPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      const fetchedItems = await APIService.fetchedItems();
      setItems(fetchedItems);
    })();
  }, []);

  const cartItem = findCartItems(userId, carts, cartProducts, items);

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
