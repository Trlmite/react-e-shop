import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';
import FilterManufacturer from './item-page-filter-manufacturer';
import FilterLust from './item-page-filter-lust';
import FilterMemory from './item-page-filter-memory';

const value = [0, 1000];

const FiltersGrouped = () => (
  <FormGroup>
    <FilterManufacturer />
    <FilterLust />
    <FilterMemory />
    <Typography variant="p" align="center">Kaina</Typography>
    <Slider
      value={value}
      min="0"
      max="1500"
      valueLabelDisplay="auto"
    />
  </FormGroup>
);

export default FiltersGrouped;
