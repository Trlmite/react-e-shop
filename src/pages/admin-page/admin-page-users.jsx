import {
  Box, List, Paper, Typography,
} from '@mui/material';
import React from 'react';
import ListItem from '../../components/list/list-item';

const AdminPageUsers = ({ users }) => {
  const usersList = 'usersList';

  return (
    <Box>
      <Typography>{usersList}</Typography>
      <Paper elevation={1}>
        <List>
          <ListItem
            row1="Username"
            row2="Email"
            row3="Role"
            toggleButtons
          />
          {users.map((user) => (
            <ListItem
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
