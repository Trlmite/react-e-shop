import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import APIService from '../../services/api-service';
import AdminPageUsers from './admin-page-users';

const AdminPage = () => {
  const pageName = 'AdminPage';

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const fetchedUsers = await APIService.fetchUsers();
      setData(fetchedUsers);
    })();
  }, []);

  return (
    <Box>
      <Typography variant="h1">{pageName}</Typography>
      <AdminPageUsers
        users={data}
      />
    </Box>
  );
};

export default AdminPage;
