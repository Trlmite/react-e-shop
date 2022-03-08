/* eslint-disable */
import React, { useState, useEffect } from 'react';
import FormGroup from '@mui/material/FormGroup';
import { Divider } from '@mui/material';

import FilterCheckBox from './item-page-filter-checkbox';

import APIService from '../../../services/api-service';
import MainButton from '../../../components/button/main-button';




const FiltersGrouped = () => {

  const [filters, setFilters] = useState([]);
  const [selections, setSelection] = useState([]);


  useEffect(() => {
    (async () => {
      const fetchedFilters = await APIService.fetchFilters();
      setFilters(fetchedFilters)
      console.log(fetchedFilters);
    })();
  }, [])


  // useEffect(() => {
  //   (async () => {
  //     await setSelection(filters.map(x => {
  //       ...x,
        
  //     }));
  //     console.log(selections)
  //   })();
  // }, []);

  const handleCheckBoxClick = (e) => {
    const { name, checked } = e.target;
    const newSelections = selections.map(x => ({
      ...x,
      checked: x.id === name ? checked : x.checked
    }));
    setSelection(newSelections);
  }

  return (
    <FormGroup>
      <Divider sx={{ my: 1 }} />
      <FilterCheckBox
        filters={filters}
        onClick={handleCheckBoxClick}
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
