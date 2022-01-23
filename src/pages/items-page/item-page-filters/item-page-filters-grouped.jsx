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

const FiltersGrouped = () => {
  const [filters, setFilters] = useState([]);
  const [itemsFilters, setItemFilters] = useState([]);
  const [filterOptions, setFilterOptions] = useState([]);
  const [filterParams, setFilterParams] = useState([]);

  useEffect(() => {
    (async () => {
      const fetchedFilters = await APIService.fetchFilters();
      const fetcheditemFilters = await APIService.fetchItems();
      const fetchedFilterOptions = await APIService.fetchFilterOptions();
      setFilters(fetchedFilters);
      setFilterOptions(fetchedFilterOptions);
      setItemFilters(fetcheditemFilters);
      setFilterParams({ filters, filterOptions });
    })();
  }, []);

  return (
    <FormGroup>
      <Divider sx={{ my: 1 }} />
      <FilterManufacturer />
      <Divider sx={{ my: 1 }} />
      <FilterCheckBox
      />
      <FilterMemory />
      <Divider sx={{ my: 1 }} />
      <Typography variant="p" align="center">Kaina</Typography>
      <Slider
        value={value}
        min="0"
        max="1500"
        valueLabelDisplay="auto"
      />
      <MainButton
        onClick={() => console.log({
          filterParams, itemsFilters,
        })}
      >
        ar atsiunte

      </MainButton>
    </FormGroup>
  );
};

export default FiltersGrouped;
