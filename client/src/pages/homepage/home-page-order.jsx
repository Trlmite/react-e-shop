/* eslint-disable */ 
import React from 'react';
import { List, Paper } from '@mui/material';
import ListItem from '../../components/list/list-item';

const HomePageUserOrder = () => (
  <Paper elevation={1}>
    <List>
      <ListItem
        row1="Order ID"
        row2="Total price"
        row3="Status"
        toggleDeleteButton
        toggleUpdateButton
      />
      <ListItem
		row1="45786-4548-adasd-casdada"
		row2="1540"
		row3="pending"
		toggleUpdateButton
        toggleDeleteButton
		/>
    </List>
  </Paper>
);

export default HomePageUserOrder;