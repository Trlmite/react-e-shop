import { styled, ListItem } from '@mui/material';

const ListItemStyled = styled(ListItem)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'flex-start',
  color: theme.palette.common.black,
  padding: theme.spacing(2),
}));

export default ListItemStyled;
