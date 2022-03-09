import React from 'react';
import {
  List, Paper,
} from '@mui/material';
import ListItem from '../../components/list/list-item';

const CartPageList = ({ carts, handleUpdateClick }) => (
  <Paper elevation={1}>
    <List>
      <ListItem
        row1="GPU"
        row2="Price"
        row3="Quantity"
        toggleDeleteButton
        toggleUpdateButton
      />
      {carts.map((cart) => (
        <ListItem
          key={cart.id}
          id={cart.id}
          // {cart.products.map(product =>(
          //   row1={product.title}
          //   row2={product.price}
          //   row3={product.quantity}
          // ))}
          // row1={cart.cart.products[i].title}
          // row2={cart.cart.products[i].price}
          // row3={cart.cart.products[i].quantity}
          handleUpdateClick={handleUpdateClick}
        />
      ))}
    </List>
  </Paper>
);

export default CartPageList;
