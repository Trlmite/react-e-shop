import {
  Box, List, Paper, Typography,
} from '@mui/material';
import React from 'react';
import ListItem from '../../components/list/list-item';

const AdminPageUsers = ({ users }) => {
  const usersList = 'usersList';
  return (
    <Box>
      <Paper elevation={1}>
        <Typography textAlign="center">{usersList}</Typography>
        <List>
          <ListItem
            row1="Username"
            row2="Email"
            row3="Role"
            toggleButtons
          />
          {users.map((user) => (
            <ListItem
              key={user.id}
              id={user.id}
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
