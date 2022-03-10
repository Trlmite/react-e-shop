/* eslint-disable */ 
import React from 'react';
import { List, Paper } from '@mui/material';
import ListItem from '../../components/list/list-item';

const HomePageUserListing = () => (
  <Paper elevation={1}>
    <List>
      <ListItem
        row1="Title"
        row2="Price"
        row3="Quantity"
        toggleDeleteButton
        toggleUpdateButton
      />
      <ListItem
				row1="Gigabyte GV-N2060D6-6GD 2.0 NVIDIA, 6 GB, GeForce RTX 2060, GDDR6, PCI-E 3.0 x 16"
				row2="1540.1"
				row3="2"
				toggleUpdateButton
				/>
    </List>
  </Paper>
);

export default HomePageUserListing;
