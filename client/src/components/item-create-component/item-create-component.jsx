import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import FilterPageBox from '../../pages/items-page/item-page-filter-styled';
import MainButton from '../button/main-button';
import SelectSpecs from './item-create-select-specs';

const filters = [
  {
    id: '1',
    label: 'Manufacturer',
    options: [
      { id: '1', filterId: '1', title: 'Zotac' },
      { id: '2', filterId: '1', title: 'Gigabyte' },
      { id: '3', filterId: '1', title: 'MSI' },
    ],
  },
  {
    id: '2',
    label: 'Memory',
    options: [
      { id: '6', filterId: '2', title: '2gb' },
      { id: '7', filterId: '2', title: '4gb' },
      { id: '8', filterId: '2', title: '6gb' },
      { id: '9', filterId: '2', title: '8gb' },
      { id: '10', filterId: '2', title: '10gb' },
      { id: '11', filterId: '2', title: '12gb' },
    ],
  },
  {
    id: '3',
    label: 'Lust',
    options: [
      { id: '4', filterId: '3', title: 'Nvidia RTX 2060' },
      { id: '5', filterId: '3', title: 'Radeon RX 6700 XT' },
      { id: '12', filterId: '3', title: 'AMD Radeon RX 6600' },
      { id: '13', filterId: '3', title: 'GeForce® GTX 1660 Ti' },
    ],
  },
];

const ItemCreationComponent = () => {
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
            const { label, options, id } = filter;
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
