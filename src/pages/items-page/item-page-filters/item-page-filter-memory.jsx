import React from 'react';
import { Typography, Box } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const FilterMemory = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <Typography variant="p" align="center">Atmintis</Typography>
    <FormControlLabel control={<Checkbox defaultChecked />} label="6 GB" />
    <FormControlLabel disabled control={<Checkbox />} label="8 GB" />
    <FormControlLabel control={<Checkbox />} label="12 GB" />
  </Box>
);

export default FilterMemory;
