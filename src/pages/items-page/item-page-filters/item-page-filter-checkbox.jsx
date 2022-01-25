/* eslint-disable */ 
import React from 'react';
import { Typography, Box, Divider } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const FilterCheckBox = ({ options, filters }) => {
  console.log({ options, filters });


  return (
    <>
      {filters.map((filter) => {
        const labelId = filter.id;
        const { label } = filter;
        return (
          <>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant="p" align="center">{label}</Typography>
              {options.map((option) => {
                if (option.filterId === labelId) {
                  return (
                    <FormControlLabel
                      control={<Checkbox />}
                      label={option.title}
                      id={option.filterId}
                      key={option.id}
                    />
                  );
                }
              })}
            </Box>
            <Divider sx={{ my: 1 }} />
          </>
        );
      })}
    </>
  );
};

export default FilterCheckBox;

/*  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {filters.map((filter) => {
          let label = '';
          if (options.filterId === filter.id) {
            label = filter.label;
          }
          return (
            <Typography variant="p" align="center">{label}</Typography>
          );
        })}

        {options.map((option) => (
          <FormControlLabel
            control={<Checkbox />}
            label={option.title}
            id={option.filterId}
            key={option.id}
          />
        ))}
      </Box>
      <Divider sx={{ my: 1 }} />
      */
