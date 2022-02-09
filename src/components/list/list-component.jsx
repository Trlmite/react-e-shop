import React from 'react';
import {
  Box,
  List, Paper,
} from '@mui/material';
import Divider from '@mui/material/Divider';
import ListItemStyled from './list-style';
import CartPageListItem from './list-item';

const CartPageList = () => (
  <Paper elevation={1}>
    <List>
      <ListItemStyled>
        <Box>GPU</Box>
        <Divider orientation="vertical" flexItem />
        <Box>Price</Box>
        <Divider orientation="vertical" flexItem />
        <Box>Count</Box>
        <Divider orientation="vertical" flexItem />
      </ListItemStyled>
      <CartPageListItem
        title="vaizdo korta"
        price="pinigai"
        count="1"
      />
    </List>
  </Paper>
);

export default CartPageList;
