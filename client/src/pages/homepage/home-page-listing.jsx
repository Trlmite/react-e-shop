/* eslint-disable */ 
import React from 'react';
import { List, Paper } from '@mui/material';
import ListItem from '../../components/list/list-item';

const HomePageUserListing = ({ userItems, handleUserDeleteClick }) => (
  <Paper elevation={1}>
    <List>
      <ListItem
        row1="Title"
        row2="Price"
        row3="Quantity"
        toggleDeleteButton
        toggleUpdateButton
      />
      {userItems.map((item) => (
        <ListItem
          key={item.id}
          id={item.id}
          row1={item.title}
          row2={item.price}
          row3={item.stock}
          toggleUpdateButton
          handleUserDeleteClick={handleUserDeleteClick}
        />
      ))}
    </List>
  </Paper>
);

export default HomePageUserListing;
