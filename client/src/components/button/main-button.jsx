/* eslint-disable */
import React from 'react';
import { styled } from '@mui/material';
import { ButtonUnstyled } from '@mui/base';

const MainButton = styled(ButtonUnstyled)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: theme.spacing(1, 2),
  borderRadius: (10, 15),
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  textAlign: 'center',
  ':hover': {
    background: theme.palette.secondary.main,
    color: theme.palette.primary.dark,
  },
  '&.disabled': {
    background: theme.palette.grey[600],
    cursor: "not-allowed",
    color: theme.palette.grey[500],
  },
  '&.disabled:hover':{
    background: theme.palette.grey[900]
  }

}));

export default function ({ disabled, children, ...props }) {
  return <MainButton className={disabled ? 'disabled' : undefined} {...props}>{children}</MainButton>;
}
