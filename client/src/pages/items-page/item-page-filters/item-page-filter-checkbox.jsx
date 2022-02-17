/* eslint-disable */
import React from 'react';
import { Typography, Box, Divider } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const FilterCheckBox = ({ filters }) => {
  // const [selections, setSelection] = useState([]);

  // useEffect(() => {
  //   setSelection(options.map(x => ({
  //     ...x,
  //     checked: false
  //   })))
  // }, [options]);

  // const handleCheckBoxClick = (e) => {
  //   const { name, checked } = e.target;
  //   const newSelections = selections.map(x => ({
  //     ...x,
  //     checked: x.id === name ? checked : x.checked
  //   }));
  //   setSelection(newSelections);
  //   console.log(selections.filter(x => x.checked === true))
  // }
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
