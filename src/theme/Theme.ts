// JS reimplementation of Style Closet scales for use in styled-components
const colors = {
  primary: '#2179ee',
};

const secondaryColors = {
  blue10: '#ade7ff',
  blue20: '#61bcff',
  blue30: '#2179ee',
  blue40: '#1f4ab4',
  blue50: '#1d2064',
  green10: '#b5ffcb',
  green20: '#5dffa3',
  green30: '#00cc9a',
  green40: '#219a8a',
  green50: '#183f51',
  purple10: '#dec7ff',
  purple20: '#a673ff',
  purple30: '#7537ef',
  purple40: '#4e23b6',
  purple50: '#2d1b64',
  coral10: '#ffc6b3',
  coral20: '#ff8e75',
  coral30: '#ff6759',
  coral40: '#eb312a',
  coral50: '#7b1e30',
  gold10: '#ffedc2',
  gold20: '#ffda8b',
  gold30: '#f0b95b',
  gold40: '#e5a229',
  gold50: '#6a4a24'
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

const darkTheme: StyleTheme = {...theme}

darkTheme.colors = {
  primary: '#000000',
}

export { theme, darkTheme };