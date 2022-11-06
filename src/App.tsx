import { useAppSelector, useAppDispatch } from './hooks/redux';
import { useEffect } from 'react';
import { startSanityGames } from './store/slices/gameShop/thunks';
import AppRouter from './router/AppRouter';

function App() {
  // const dispatch = useAppDispatch();
  // const gamesState = useAppSelector( state => state.gameShop );

  // useEffect(() => {
  //   dispatch(startSanityGames())
  // }, [])

  // if(gamesState.games.length === 0) return<></>;

  return (
    <>
      <AppRouter/>
    </>
  )
}

export default App
