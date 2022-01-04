import { styled, Box } from '@mui/material';

const FilterPageBox = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  color: theme.palette.common.black,
  padding: theme.spacing(2),
  borderRadius: '2%',
  boxShadow: '2px 2px 10px 1px #BDBDBD',
}));

export default FilterPageBox;
