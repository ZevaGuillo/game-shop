
const colors = {
  primary: '#7D52D9',
  googleColor: '#4285F4',
  white: '#F2F2F2',

  //theme
  bgColor: '#e0e0e0',
  bgColorOpacity: '#e0e0e0c5',
  bgColorOpacity2: '#e0e0e088',
  search: 'rgba(190,190,190,0.25)',
  negative: '#1E1E1E',
  text: 'rgba(30,30,30,0.7)',
  variant: '#d6d6d6',
  variant1: 'rgba(30,30,30,0.07)',
  variant2: 'rgba(30,30,30,0.35)',
  variant3: 'rgba(30,30,30,0.5)',
  inputColor: '#1E1E1E',
  authPattern1: '#dbdde0',
  authPattern2: '#b9bcc2',
  authPattern3: '#979ca4',
  authPattern4: '#777d88',
  btnHover: 'rgba(30,30,30,0.8)',
  //card light
  cardGradient: 'linear-gradient(145deg, #ffffff7b, #ecececc7);',
  cardShadow: ` 5px 5px 10px #d7d7d7,
                -5px -5px 10px #e9e9e9;`,
  // menu
  menubg: '#EDEDED',
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
    bgColorOpacity: '#1e1e1ec5',
    bgColorOpacity2: '#1e1e1e58',
    search: 'rgba(40,40,40,0.45)',
    negative: '#e0e0e0',
    text: 'rgba(255,255,255,0.7)',
    variant: '#2a2a2a',
    variant1: 'rgba(255,255,255,0.07)',
    variant2: 'rgba(255,255,255,0.25)',
    variant3: 'rgba(255,255,255,0.5)',
    inputColor: '#3D3D3D',
    authPattern1: '#262626',
    authPattern2: '#2f2f2f',
    authPattern3: '#373737',
    authPattern4: '#404040',
    btnHover: 'rgba(255,255,255,0.2)',
    //card 
    cardGradient: 'linear-gradient(145deg, #333030, #1a1919ce);',
    cardShadow: `9px 9px 26px #171717,
    -9px -9px 26px #252525`,
    //menu
    menubg:'#333333'
  }
}


export { theme, darkTheme };