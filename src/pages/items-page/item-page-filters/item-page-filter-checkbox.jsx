/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Typography, Box, Divider } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const FilterCheckBox = ({ options, filters }) => {
  const [selections, setSelection] = useState([]);

  useEffect(() => {
    setSelection(options.map(x => ({
      ...x,
      checked: false
    })))
  }, [options]);

  const handleCheckBoxClick = (e) => {
    const { name, checked } = e.target;
    const newSelections = selections.map(x => ({
      ...x,
      checked: x.id === name ? checked : x.checked
    }));
    setSelection(newSelections);
  }
  return (
    <>
      {filters.map((filter) => {
        const labelId = filter.id;
        const { label } = filter;
        return (
          <Box key={labelId}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant="p" align="center">{label}</Typography>
              {selections.map((option) => {
                if (option.filterId === labelId) {
                  return (
                    <FormControlLabel
                      control={<Checkbox
                        name={option.id}

                        checked={option.checked}
                      />}
                      label={option.title}
                      id={option.filterId}
                      key={option.id}
                      onChange={handleCheckBoxClick}
                    />
                  );
                }
              })}
            </Box>
            <Divider sx={{ my: 1 }} />
          </Box>
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
