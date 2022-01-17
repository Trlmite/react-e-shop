import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
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

const ItemCreationComponent = () => {
  const [memory, setMemory] = useState(options[0]);
  const [manufactorerSelect, setManufactorerSelect] = useState(manufactorer[0]);

  const handleMemoryChange = (e) => {
    setMemory(e.target.value);
  };
  const handleManufactorerSelect = (e) => {
    setManufactorerSelect(e.target.value);
  };

  return (
    <FilterPageBox>
      <Box sx={{ textAlign: 'center', width: '100%' }}>
        <Typography align="center"> GPU specs</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <SelectSpecs
            id="memory-selector-id"
            options={memoryOptions}
            name="Memory"
            onChange={handleMemoryChange}
            value={memory}
          />
          <SelectSpecs
            id="manufacturer-selector-id"
            options={manufactorerOptions}
            name="Manufacturer"
            onChange={handleManufactorerSelect}
            value={manufactorerSelect}
          />
        </Box>
      </Box>
    </FilterPageBox>
  );
};

export default ItemCreationComponent;
