import { ThemeOptions } from '@mui/material/styles';
import createTheme from '@mui/material/styles/createTheme';

export const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    color: {
      backgroundColor: 'white',
      paper: 'white',
      containerBackground: 'white',
      borderInput: '#e3e3e3',
      borderInputHover: 'black',
      primary: '#00ab55',
      primaryHover: '#ebf8f2',
      primaryBold: '#005249',
      secondary: '#59DF81',
      secondaryBold: '#000080',
      danger: '#FF5630',
      orange: '#FAA87F',
    },
    text: {
      h1: '#3D4650',
      subtitle: '#444D56',
      p: '#434C55',
      span: '#9EA9B5',
      button: '#637381',
    },
  },
};

// @ts-ignore
export const lightTheme = createTheme(lightThemeOptions);
