/* eslint-disable */
import React from 'react';
import { Typography, Box, Divider } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const FilterCheckBox = ({ filters, onClick }) => {
  // const [selections, setSelection] = useState([]);

  // useEffect(() => {
  //   setSelection(filters.options.map(x => ({
  //     ...x,
  //     checked: false
  //   })))
  //   console.log(selections)
  // }, [filters]);

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
                  onClick={onClick}
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

