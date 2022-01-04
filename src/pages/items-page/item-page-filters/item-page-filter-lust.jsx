import React from 'react';
import { Typography, Box } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const FilterLust = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <Typography variant="p" align="center">Lustas</Typography>
    <FormControlLabel control={<Checkbox defaultChecked />} label="NVIDIA RTX 3060" />
    <FormControlLabel disabled control={<Checkbox />} label="AMD RX 6600" />
  </Box>
);

export default FilterLust;
