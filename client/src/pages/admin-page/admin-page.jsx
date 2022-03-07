import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import APIService from '../../services/api-service';
import AdminPageUsers from './admin-page-users';

const AdminPage = () => {
  const pageName = 'AdminPage';
  const [errors, setErrors] = useState([]);
  const [data, setData] = useState([]);
  const handleUserDeleteClick = async (id) => {
    try {
      setErrors('');
      await APIService.deleteUser({ id });
    } catch (error) {
      setErrors(error.response.data.message);
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
  }, [handleUserDeleteClick]);

  return (
    <Box>
      <Typography variant="h1">{pageName}</Typography>
      <Typography variant="h4" color="error">{errors}</Typography>
      <AdminPageUsers
        users={data}
        handleUpdateClick={handleUpdateClick}
        handleUserDeleteClick={handleUserDeleteClick}
      />
    </Box>
  );
};

export default AdminPage;
