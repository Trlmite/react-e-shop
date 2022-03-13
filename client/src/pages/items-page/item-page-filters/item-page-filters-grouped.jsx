import React, { useContext } from 'react';
import FormGroup from '@mui/material/FormGroup';
import { Divider } from '@mui/material';
import FilterCheckBox from './item-page-filter-checkbox';
import MainButton from '../../../components/button/main-button';
import { itemFilterContext } from '../context/item-filter-context';

const FiltersGrouped = () => {
  const { filters, handleCheckBoxClick, changeFilters } = useContext(itemFilterContext);

  return (
    <FormGroup>
      <Divider sx={{ my: 1 }} />
      <FilterCheckBox
        filters={filters}
        onClick={handleCheckBoxClick}
      />
      <MainButton
        onClick={changeFilters}
      >
        Search
      </MainButton>
    </FormGroup>
  );
};

export default FiltersGrouped;
