import { Box, Typography } from '@mui/material';
import React from 'react';
import FilterPageBox from '../../pages/items-page/item-page-filter-styled';
import SelectSpecs from './item-create-select-specs';

const options = {
  0: '2GB',
  1: '4GB',
  2: '6GB',
  3: '8GB',
  4: '10GB',
  5: '12GB',
};
const manufactorer = {
  0: 'zotac',
  1: 'gigabyte',
  2: 'msi',
};

const memoryOptions = Object.values(options);
const manufactorerOptions = Object.values(manufactorer);

const ItemCreationComponent = () => (
  <FilterPageBox>
    <Box sx={{ textAlign: 'center', width: '100%' }}>
      <Typography align="center"> GPU specs</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <SelectSpecs
          id="memory-selector-id"
          options={memoryOptions}
          name="Memory"
        />
        <SelectSpecs
          id="manufacturer-selector-id"
          options={manufactorerOptions}
          name="Manufacturer"
        />
      </Box>
    </Box>
  </FilterPageBox>
);

export default ItemCreationComponent;
