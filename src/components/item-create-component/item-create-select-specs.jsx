import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/material';

const SelectSpecs = ({
  options, name, id, value, onChange,
}) => (
  <Box sx={{ mx: 1 }}>
    <TextField
      key={id}
      id={id}
      select
      label={name}
      value={value}
      helperText={`Select GPU's ${name}`}
      onChange={onChange}
    >
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  </Box>
);

export default SelectSpecs;
