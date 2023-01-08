import { useAppSelector, useAppDispatch } from './hooks/redux';
import { useEffect, useState } from 'react';
import { startSanityHome } from './store/gameShop/thunks';
import AppRouter from './router/AppRouter';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize'
import { GlobalStyle } from './theme/GlobalStyle';
import { darkTheme, StyleTheme, theme } from './theme/Theme';
import { setDarkMode } from './store/gameShop/gameShopSlice';


function App() {
  const dispatch = useAppDispatch();
  const gameShop = useAppSelector( state => state.gameShop );

  
  return (
    <ThemeProvider theme={gameShop.darkMode? darkTheme: theme}>
        <GlobalStyle />
        <AppRouter/>
    </ThemeProvider>

  )
}


export default App
