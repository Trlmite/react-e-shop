import {
  Box, List, Paper, Typography,
} from '@mui/material';
import React from 'react';
import ListItem from '../../components/list/list-item';

const AdminPageUsers = ({ users, handleUpdateClick, handleUserDeleteClick }) => {
  const usersList = 'Users List';
  return (
    <Box>
      <Paper elevation={1}>
        <Typography textAlign="center">{usersList}</Typography>
        <List>
          <ListItem
            row1="Username"
            row2="Email"
            row3="Role"
            toggleDeleteButton
            toggleUpdateButton
          />
          {users.map((user) => (
            <ListItem
              key={user.id}
              id={user.id}
              handleUpdateClick={handleUpdateClick}
              handleUserDeleteClick={handleUserDeleteClick}
              row1={user.username}
              row2={user.email}
              row3={user.role}
            />
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default AdminPageUsers;
