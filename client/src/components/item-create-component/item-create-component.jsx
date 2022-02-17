import { Box, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import FilterPageBox from '../../pages/items-page/item-page-filter-styled';
import APIService from '../../services/api-service';
import MainButton from '../button/main-button';
import SelectSpecs from './item-create-select-specs';

const ItemCreationComponent = () => {
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    (async () => {
      const fetchedFilters = await APIService.fetchFilters();
      setFilters(fetchedFilters);
    })();
  }, []);

  const [filterSelections, setFilterSelections] = useState(filters.reduce((result, filter) => ({
    ...result,
    [filter.id]: filter.options[0],
  }), {}));

  const setFilterSelection = (event) => {
    const { value: option, name: filterId } = event.target;
    setFilterSelections({
      ...filterSelections,
      [filterId]: option,
    });
  };

  return (
    <FilterPageBox>
      <Box sx={{ textAlign: 'center', width: '100%' }}>
        <Typography align="center" variant="h5"> GPU specs</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          {filters.map((filter) => {
            const { id, label, options } = filter;
            return (
              <SelectSpecs
                id={id}
                key={id}
                options={options}
                label={label}
                name={id}
                onChange={setFilterSelection}
                value={filterSelections[id]}
              />
            );
          })}
        </Box>
        <MainButton
          onClick={() => console.log(filterSelections)}
          sx={{ width: 100 }}
        >
          Search
        </MainButton>
      </Box>
    </FilterPageBox>
  );
};

export default ItemCreationComponent;
