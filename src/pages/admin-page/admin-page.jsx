import { Box, Typography } from '@mui/material';
import React from 'react';
import AdminPageUsers from './admin-page-users';

const users = [
  {
    id: '10',
    username: 'pyglius',
    name: 'Petrikus',
    surname: 'Gilius',
    email: 'petrus@gmail.cop',
    location: 'Vilnius',
    role: 'USER',
  },
  {
    id: '15',
    username: 'hiiloo123',
    name: 'Kalnenas',
    surname: 'Kalnauskas',
    email: 'hillonhill@yahoo.com',
    location: 'Taurage',
    role: 'USER',
  },
  {
    id: '20',
    username: 'latgals',
    name: 'Girtenas',
    surname: 'Daugavas',
    email: 'girts@lv',
    location: 'Daugpils',
    role: 'USER',
  },
];

console.log(users);

const AdminPage = () => {
  const pageName = 'AdminPage';

  return (
    <Box>
      <Typography variant="h1">{pageName}</Typography>
      <AdminPageUsers
        users={users}
      />
    </Box>
  );
};

export default AdminPage;
