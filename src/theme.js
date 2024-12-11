// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2d3748', // Dark grey-blue
    },
    secondary: {
      main: '#3182ce', // Blue
    },
    background: {
      default: '#f5f7fa', // Light greyish-blue
      paper: '#ffffff', // White background for cards/modals
    },
    text: {
      primary: '#333333', // Dark grey text
      secondary: '#2d3748', // Dark grey-blue text
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 700,
      fontSize: '2.5rem',
      marginBottom: '1rem',
    },
    h2: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 600,
      fontSize: '2rem',
      marginBottom: '0.75rem',
    },
    h3: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 600,
      fontSize: '1.75rem',
      marginBottom: '0.5rem',
    },
    h4: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 600,
      fontSize: '1.5rem',
      marginBottom: '0.5rem',
    },
    body1: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
  },
});

export default theme;
