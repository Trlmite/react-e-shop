import { createTheme } from '@mui/material';

const mainTheme = createTheme({
  palette: {
    primary: {
      main: '#363537',
      dark: '#1F1E1F',
      light: '#9B979B',
    },
    secondary: {
      main: '#0CCE6B',
      dark: '#066031',
      light: '#8CF8C0',
    },
  },
  typography: {
    fontSize: 14,
  },
});

export default mainTheme;
