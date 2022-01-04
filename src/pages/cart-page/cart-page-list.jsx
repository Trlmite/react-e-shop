import React from 'react';
import {
  Box,
  List, Paper,
} from '@mui/material';
import Divider from '@mui/material/Divider';
import ListItemStyled from './cart-page-list-style';

const CartPageList = () => (
  <Paper elevation={1}>
    <List>
      <ListItemStyled>
        <Box>Title</Box>
        <Divider orientation="vertical" flexItem />
        <Box>Price</Box>
        <Divider orientation="vertical" flexItem />
        <Box>Stock</Box>
        <Divider orientation="vertical" flexItem />
        <Box>Delete btn</Box>
      </ListItemStyled>
    </List>
  </Paper>
);

export default CartPageList;
