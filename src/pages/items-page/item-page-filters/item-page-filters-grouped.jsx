/* eslint-disable */
import React, { useState, useEffect } from 'react';
import FormGroup from '@mui/material/FormGroup';
import Slider from '@mui/material/Slider';
import { Divider, Typography } from '@mui/material';
import FilterManufacturer from './item-page-filter-manufacturer';
import FilterCheckBox from './item-page-filter-checkbox';
import FilterMemory from './item-page-filter-memory';
import APIService from '../../../services/api-service';
import MainButton from '../../../components/button/main-button';

const value = [0, 1000];

const filters = [
  {
    id: '1',
    label: 'Manufacturer',
  },
  {
    id: '2',
    label: 'Memory',
  },
  {
    id: '3',
    label: 'Lust',
  },
];

const FiltersGrouped = () => {
  
  const [filtersA, setFiltersA] = useState([]);

  useEffect(() =>{
    (async () =>{
      const fetchedFiltr = await APIService.fetchFilterOptions();
      setFiltersA(fetchedFiltr)
    })();
  }, [])
  
  console.log(filtersA)

  return (
    <FormGroup>
      <Divider sx={{ my: 1 }} />
      <FilterCheckBox
        options={filtersA}
        filters={filters}
      />
      <Typography variant="p" align="center">Kaina</Typography>
      <Slider
        value={value}
        min="0"
        max="1500"
        valueLabelDisplay="auto"
      />
    </FormGroup>
  );
};

export default FiltersGrouped;
