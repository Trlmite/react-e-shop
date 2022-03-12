import React from 'react';
import {
  List, Paper, Typography,
} from '@mui/material';
import ListItem from '../../components/list/list-item';

const CartPageList = ({ cart, handleUserDeleteClick }) => {
  let isEmpty = false;

  if (cart.length === 0) {
    isEmpty = true;
  } else {
    isEmpty = false;
  }

  return (
    <Paper elevation={1}>
      {isEmpty
        ? (
          <Typography variant="h6" textAlign="center" sx={{ my: 2 }}> Your cart is empty </Typography>
        )
        : (
          <List>
            <ListItem
              row1="GPU"
              row2="Price"
              row3="Quantity"
              toggleDeleteButton
              toggleUpdateButton
            />
            {cart.map((item) => (
              <ListItem
                key={item.productId}
                id={item.productId}
                row1={item.title}
                row2={item.price}
                row3={item.quantity}
                toggleUpdateButton
                handleUserDeleteClick={handleUserDeleteClick}
              />
            ))}
          </List>
        )}
    </Paper>
  );
};

export default CartPageList;
