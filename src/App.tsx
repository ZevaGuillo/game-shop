import { useAppSelector, useAppDispatch } from './hooks/redux';
import AppRouter from './router/AppRouter';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './theme/GlobalStyle';
import { darkTheme, theme } from './theme/Theme';


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
