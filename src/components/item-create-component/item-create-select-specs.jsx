import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/material';

const SelectSpecs = ({
  options, name, id, value, onChange, label,
}) => (
  <Box sx={{ mx: 1 }}>
    <TextField
      key={id}
      id={id}
      select
      label={label}
      name={name}
      value={value}
      helperText={`Select GPU's ${label}`}
      onChange={onChange}
    >
      {options.map((option) => (
        <MenuItem key={option.id} value={option}>
          {option.title}
        </MenuItem>
      ))}
    </TextField>
  </Box>
);

export default SelectSpecs;
