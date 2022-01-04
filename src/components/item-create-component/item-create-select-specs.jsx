import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/material';

const SelectInput = ({ options, name, id }) => (
  <Box sx={{ mx: 1 }}>
    <TextField
      id={id}
      select
      label={name}
      value=""
      helperText={`Select GPU's ${name}`}
    >
      {options.map((option) => (
        <MenuItem key={option.id} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  </Box>
);

export default SelectInput;
