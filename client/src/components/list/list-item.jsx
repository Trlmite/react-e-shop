import React from 'react';
import { Box, Divider, Button } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import ClearIcon from '@mui/icons-material/Clear';
import ListItemStyled from './list-style';

const ListItem = ({
  row1, row2, row3, toggleButtons, id, handleUpdateClick, handleUserDeleteClick,
}) => (
  <ListItemStyled>
    <Box>{row1}</Box>
    <Divider orientation="vertical" flexItem variant="fullWidth" />
    <Box>{row2}</Box>
    <Divider orientation="vertical" flexItem variant="fullWidth" />
    <Box>{row3}</Box>
    {!toggleButtons
      ? (
        <>
          <Button
            color="warning"
            onClick={() => handleUpdateClick(id)}
          >
            <RefreshIcon />
          </Button>
          <Button
            onClick={() => handleUserDeleteClick(id)}
            color="error"
          >
            <ClearIcon />
          </Button>
        </>
      )
      : null}
  </ListItemStyled>
);

export default ListItem;
