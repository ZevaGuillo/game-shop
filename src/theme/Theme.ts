
const colors = {
  primary: '#2179ee',
  
  //theme
  bgColor: '#FFFFFF',
  negative: '#1E1E1E',
  text: 'rgba(30,30,30,0.5)',
  variant: 'rgba(30,30,30,0.05)',
  inputColor: '#1E1E1E',
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
    ...theme.colors,

    bgColor: '#1E1E1E',
    negative: '#ffffff',
    text: 'rgba(255,255,255,0.05)',
    variant: 'rgba(255,255,255,0.05)',
    inputColor: '#3D3D3D',
  }
}


export { theme, darkTheme };