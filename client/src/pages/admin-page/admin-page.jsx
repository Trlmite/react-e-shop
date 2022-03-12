/* eslint-disable */
import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import APIService from '../../services/api-service';
import AdminPageUsers from './admin-page-users';

const AdminPage = () => {
  const [data, setData] = useState([]);
  

  const handleUserDeleteClick = async (id) => {
    const newData = data.filter(x => x.id !== id);
    try{
      await APIService.deleteUser(id);
      await fetchUsers()
    }
    catch(error){
      throw new Error (error);
    }
    setData(newData)
  };   

  const fetchUsers = async () => {
    const fetchedUsers = await APIService.fetchUsers();
    setData(fetchedUsers);
  }

  const handleUpdateClick = (id) => {
    const findUser = data.find((x) => x.id === id);
    console.log(findUser);
  };

  useEffect(fetchUsers, []);

  return (
    <Box>
      <AdminPageUsers
        users={data}
        handleUpdateClick={handleUpdateClick}
        handleUserDeleteClick={handleUserDeleteClick}
      />
    </Box>
  );
};

export default AdminPage;
