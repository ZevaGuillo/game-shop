// JS reimplementation of Style Closet scales for use in styled-components
const colors = {
  primary: '#2179ee',
};

const secondaryColors = {
  blue10: '#ade7ff',
};

const breakpoints = ['31.25em', '43.75em', '46.875em'];
const fontSizes = ['1.2rem', '1.4rem', '1.6rem', '1.8rem', '2.4rem', '2.8rem', '3.2rem', '4.0rem', '4.8rem', '6.4rem'];
// const space = ['0', '.4rem', '.8rem', '1.2rem', '1.6rem', '2.0rem', '3.2rem', '4.8rem', '6.4rem', '9.6rem'];

export interface StyleTheme {
  breakpoints: string[];
  fontSizes: string[];
  colors: { [key in keyof typeof colors]: string };
  secondaryColors: { [key in keyof typeof secondaryColors]: string };
}

const theme: StyleTheme = {
  breakpoints,
  fontSizes,
  colors,
  secondaryColors
};

const darkTheme: StyleTheme = {
  ...theme,
  colors: {
    primary: '#000000',
  }
}


export { theme, darkTheme };