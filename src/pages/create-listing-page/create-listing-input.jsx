import {
  Box,
  TextField,
  Typography,
  InputLabel,
  MenuItem,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import React from 'react';

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
];

const CreateListingInput = () => {
  const pageName = 'createListingInput';

  return (
    <Box>
      <Typography>{pageName}</Typography>
      <InputLabel htmlFor="title" sx={{ fontWeight: 600, my: 1 }}>Title</InputLabel>
      <TextField
        sx={{ my: 1 }}
        id="title"
      />
      <InputLabel htmlFor="imageURL" sx={{ fontWeight: 600, my: 1 }}>ImageURL</InputLabel>
      <TextField
        sx={{ my: 1 }}
        id="imageURL"
      />
      <InputLabel htmlFor="description" sx={{ fontWeight: 600, my: 1 }}>Description</InputLabel>
      <TextField
        sx={{ my: 1 }}
        id="description"
      />
      <Box>
        <InputLabel htmlFor="price" sx={{ fontWeight: 600, my: 1 }}>Price</InputLabel>
        <TextField
          sx={{ my: 1 }}
          type="number"
          id="price"
        />
        <InputLabel htmlFor="currency" sx={{ fontWeight: 600, my: 1 }}>Currency</InputLabel>
        <TextField
          sx={{ my: 1 }}
          select
          id="currency"
        >

          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <InputLabel htmlFor="new" sx={{ fontWeight: 600, mx: 1 }}>Condition</InputLabel>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="New"
          id="new"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Used"
          id="used"
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <InputLabel htmlFor="manufactorer" sx={{ fontWeight: 600, mx: 1 }}>GPU&apos;s specs</InputLabel>
        <Box>
          <InputLabel htmlFor="manufacturer" sx={{ fontWeight: 600, my: 1 }}>Manufacturer</InputLabel>
          <TextField
            sx={{ my: 1 }}
            id="manufacturer"
          />
        </Box>
        <Box>
          <InputLabel htmlFor="memory" sx={{ fontWeight: 600, my: 1 }}>Memory</InputLabel>
          <TextField
            sx={{ my: 1 }}
            id="memory"
          />
        </Box>
        <Box>
          <InputLabel htmlFor="lust" sx={{ fontWeight: 600, my: 1 }}>Lust</InputLabel>
          <TextField
            sx={{ my: 1 }}
            id="lust"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CreateListingInput;
