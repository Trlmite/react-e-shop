/* eslint-disable */
import React, { useState, useEffect } from 'react';
import FormGroup from '@mui/material/FormGroup';
import { Divider, Typography } from '@mui/material';

import FilterCheckBox from './item-page-filter-checkbox';

import APIService from '../../../services/api-service';
import MainButton from '../../../components/button/main-button';




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
  
  return (
    <FormGroup>
      <Divider sx={{ my: 1 }} />
      <FilterCheckBox
        options={filtersA}
        filters={filters}
      />
      <MainButton
      onClick={() => console.log("veikia")}
      >
        Search
      </MainButton>
    </FormGroup>
  );
};

export default FiltersGrouped;
