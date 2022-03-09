/* eslint-disable */
import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import APIService from '../../services/api-service';
import AdminPageUsers from './admin-page-users';

const AdminPage = () => {
  const pageName = 'AdminPage';
  const [data, setData] = useState([]);

  const handleUserDeleteClick = async (id) => {
    const { status } = await APIService.deleteUser(id);
    if(status === 200) {
      const newData = data.filter(x => x.id !== id);
      return setData(newData);
    }
  };

  const handleUpdateClick = (id) => {
    const findUser = data.find((x) => x.id === id);
    console.log(findUser);
  };

  useEffect(() => {
    (async () => {
      const fetchedUsers = await APIService.fetchUsers();
      setData(fetchedUsers);
    })();
  }, [data]);

  return (
    <Box>
      <Typography variant="h1">{pageName}</Typography>
      <AdminPageUsers
        users={data}
        handleUpdateClick={handleUpdateClick}
        handleUserDeleteClick={handleUserDeleteClick}
      />
    </Box>
  );
};

export default AdminPage;
