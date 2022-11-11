import { useAppSelector, useAppDispatch } from './hooks/redux';
import { useEffect, useState } from 'react';
import { startSanityGames } from './store/slices/gameShop/thunks';
import AppRouter from './router/AppRouter';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize'
import { GlobalStyle } from './theme/GlobalStyle';
import { darkTheme, StyleTheme, theme } from './theme/Theme';
import { setDarkMode } from './store/slices/gameShop/gameShopSlice';

function App() {
  const dispatch = useAppDispatch();
  const {darkMode} = useAppSelector( state => state.gameShop );

  // useEffect(() => {
  //   dispatch(startSanityGames())
  // }, [])

  // if(gamesState.games.length === 0) return<></>;

  return (
    <ThemeProvider theme={darkMode? darkTheme: theme}>
      <>
        <GlobalStyle />
        <AppRouter/>
      </>
    </ThemeProvider>

  )
}


export default App
