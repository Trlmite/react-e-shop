import React from 'react';
import { Box, Divider, Button } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import ListItemStyled from './cart-page-list-style';

const CartPageListItem = ({
  title, price, count,
}) => (
  <ListItemStyled>
    <Box>{title}</Box>
    <Divider orientation="vertical" flexItem />
    <Box>{price}</Box>
    <Divider orientation="vertical" flexItem />
    <Box>{count}</Box>
    <Divider orientation="vertical" flexItem />
    <Button color="error"><ClearIcon /></Button>
  </ListItemStyled>
);

export default CartPageListItem;
