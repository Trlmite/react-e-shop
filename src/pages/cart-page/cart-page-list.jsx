import React from 'react';
import {
  List, Paper,
} from '@mui/material';
import ListItem from '../../components/list/list-item';

const CartPageList = () => (
  <Paper elevation={1}>
    <List>
      <ListItem
        row1="GPU"
        row2="Price"
        row3="Quantity"
        toggleButtons
      />
      <ListItem
        row1="vaizdo korta"
        row2="pinigai"
        row3="1"
      />
    </List>
  </Paper>
);

export default CartPageList;
