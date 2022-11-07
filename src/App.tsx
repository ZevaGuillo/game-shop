import { useAppSelector, useAppDispatch } from './hooks/redux';
import { useEffect, useState } from 'react';
import { startSanityGames } from './store/slices/gameShop/thunks';
import AppRouter from './router/AppRouter';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './theme/GlobalStyle';
import { darkTheme, StyleTheme, theme } from './theme/Theme';

function App() {
  // const dispatch = useAppDispatch();
  // const gamesState = useAppSelector( state => state.gameShop );

  // useEffect(() => {
  //   dispatch(startSanityGames())
  // }, [])

  // if(gamesState.games.length === 0) return<></>;

  const [themeState, setThemeState] = useState<StyleTheme>(theme)
  
  const onClickTheme = ()=>{
    if(themeState !== theme){
      setThemeState(theme)
      return;
    }
    setThemeState(darkTheme)
  }

  return (
    <ThemeProvider theme={themeState}>
      <>
        <AppRouter/>
        {/* <button onClick={onClickTheme}>darkCOlor</button> */}
        <GlobalStyle />
      </>
    </ThemeProvider>

  )
}


export default App
