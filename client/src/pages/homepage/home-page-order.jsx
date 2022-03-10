/* eslint-disable */ 
import React from 'react';
import { List, Paper } from '@mui/material';
import ListItem from '../../components/list/list-item';

const HomePageUserOrder = ({ orders }) => {
  console.log(orders)
  return(
  <Paper elevation={1}>
    <List>
      <ListItem
        row1="Order ID"
        row2="Total price"
        row3="Status"
        toggleDeleteButton
        toggleUpdateButton
      />
      {orders.map(order => (
        <ListItem
          row1={order.id}
          row2={order.totalPrice}
          row3={order.status}
          toggleDeleteButton
          toggleUpdateButton
        />
      ))}
    </List>
  </Paper>
  )
};

export default HomePageUserOrder;