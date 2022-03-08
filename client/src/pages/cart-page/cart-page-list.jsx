import React from 'react';
import {
  List, Paper,
} from '@mui/material';
import ListItem from '../../components/list/list-item';

const CartPageList = ({ items }) => (
  <Paper elevation={1}>
    <List>
      <ListItem
        row1="GPU"
        row2="Price"
        row3="Quantity"
        toggleDeleteButton
        toggleUpdateButton
      />
      {items.map((item) => (
        <ListItem
          key={item.id}
          id={item.id}
          row1={item.title}
          row2={item.price}
          row3={item.stock}
        />
      ))}
    </List>
  </Paper>
);

export default CartPageList;
