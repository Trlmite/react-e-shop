import React from 'react';
import {
  List, Paper,
} from '@mui/material';
import ListItem from '../../components/list/list-item';

const CartPageList = ({ cart, handleUpdateClick, handleUserDeleteClick }) => (
  <Paper elevation={1}>
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
          handleUpdateClick={handleUpdateClick}
          handleUserDeleteClick={handleUserDeleteClick}
        />
      ))}
    </List>
  </Paper>
);

export default CartPageList;
