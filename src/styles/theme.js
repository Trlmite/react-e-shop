import { createTheme } from '@mui/material';

const mainTheme = createTheme({
  palette: {
    primary: {
      main: '#019ddc',
      dark: '#2a2d34',
      light: '#98ce01',
    },
  },
  typography: {
    fontSize: 14,
  },
});

export default mainTheme;
