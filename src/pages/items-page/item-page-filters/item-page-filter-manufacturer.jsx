import React from 'react';
import { Typography, Box } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const FilterManufacturer = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <Typography variant="p" align="center">Gamintojas</Typography>
    <FormControlLabel control={<Checkbox defaultChecked />} label="ZOTAC" />
    <FormControlLabel control={<Checkbox />} label="GIGABYTE" />
    <FormControlLabel disabled control={<Checkbox />} label="ASUS" />
  </Box>
);

export default FilterManufacturer;
