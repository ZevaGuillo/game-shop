import { useAppSelector, useAppDispatch } from './hooks/redux';
import { useEffect, useState } from 'react';
import { startSanityGames } from './store/slices/gameShop/thunks';
import AppRouter from './router/AppRouter';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize'
import { GlobalStyle } from './theme/GlobalStyle';
import { darkTheme, StyleTheme, theme } from './theme/Theme';
import { setDarkMode } from './store/slices/gameShop/gameShopSlice';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient()

function App() {
  const dispatch = useAppDispatch();
  const gameShop = useAppSelector( state => state.gameShop );

  // useEffect(() => {
  //   dispatch(startSanityGames())
  // }, [])

  // if(gameShop.isLoading) return<></>;

  return (
    <ThemeProvider theme={gameShop.darkMode? darkTheme: theme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <AppRouter/>
      </QueryClientProvider>
    </ThemeProvider>

  )
}


export default App
