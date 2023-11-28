import { ThemeOptions } from '@mui/material/styles';
import createTheme from '@mui/material/styles/createTheme';

const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    color: {
      backgroundColor: '#151C23',
      paper: '#21282E',
      containerBackground: '#333d48',
      borderInput: '#4C5967',
      borderInputHover: 'white',
      primary: '#00AB55',
      primaryHover: '#12322c',
      primaryBold: '#005249',
      secondary: '#59DF81',
      secondaryBold: '#2E7D32',
      danger: '#FF5630',
      orange: '#FAA87F',
    },
    text: {
      h1: 'white',
      subtitle: '#D8D9DB',
      p: '#6B7784',
      span: '#596875',
      button: '#919EAB',
    },
  },
};

// @ts-ignore
export const darkTheme = createTheme(darkThemeOptions);
