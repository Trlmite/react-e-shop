/* eslint-disable */
import React, { useState, useEffect } from 'react';
import FormGroup from '@mui/material/FormGroup';
import { Divider, Typography } from '@mui/material';

import FilterCheckBox from './item-page-filter-checkbox';

import APIService from '../../../services/api-service';
import MainButton from '../../../components/button/main-button';




const FiltersGrouped = () => {
  
  const [filters, setFilters] = useState([]);

  useEffect(() =>{
    (async () =>{
      const fetchedFilters = await APIService.fetchFilters();
      setFilters(fetchedFilters)
    })();
  }, [])

  return (
    <FormGroup>
      <Divider sx={{ my: 1 }} />
      <FilterCheckBox
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
