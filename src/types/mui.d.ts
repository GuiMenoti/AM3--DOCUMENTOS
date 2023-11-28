declare module '@mui/material/styles' {
  interface Theme {
    theme: ThemeOption;
  }

  interface ThemeOptions {
    palette: Palette;
  }

  interface Palette {
    mode: PaletteMode;
    color: {
      backgroundColor: string;
      paper: string;
      containerBackground: string;
      borderInput: string;
      borderInputHover: string;
      primary: string;
      primaryHover: string;
      primaryBold: string;
      secondary: string;
      secondaryBold: string;
      danger: string;
      orange: string;
    };
    text: {
      h1: string;
      subtitle: string;
      p: string;
      span: string;
      button: string;
    };
  }
}
