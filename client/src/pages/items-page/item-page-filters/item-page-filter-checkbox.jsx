/* eslint-disable */
import React from 'react';
import { Typography, Box, Divider } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const FilterCheckBox = ({ filters, onClick }) => {
 
  return (
    <>
      {filters.map(({ id, label, options }) => {
        return (
          <Box
            sx={{ display: 'flex', flexDirection: 'column' }}
            key={id}
          >
            <Typography
              variant="p"
              align="center"
              key={id}
            >
              {label}
            </Typography>
            {options.map((option) => {
              return (
                <FormControlLabel
                  control={<Checkbox
                    name={option.id}
                    key={option.id}
                    onClick={onClick}
                    checked={option.checked}
                  />}
                  label={option.title}
                  id={option.id}
                  key={option.id}
                />
              )
            }
            )
            }
            <Divider sx={{ my: 1 }} />
          </Box>
        )
      })}
    </>
  );
};

export default FilterCheckBox;

