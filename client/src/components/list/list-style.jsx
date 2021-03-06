import { styled, ListItem } from '@mui/material';

const ListItemStyled = styled(ListItem)(({ theme }) => ({
  width: '100%',
  display: 'grid',
  justifyContent: 'center',
  alignItems: 'center',
  gridTemplateColumns: '3fr 1fr 2fr 1fr 2fr repeat(2, 1fr)',
  gridTemplateRows: '1fr',
  gridColumnGap: 0,
  gridRowGap: 0,
  color: theme.palette.common.black,
  padding: theme.spacing(1),
  textAlign: 'center',
}));

export default ListItemStyled;
