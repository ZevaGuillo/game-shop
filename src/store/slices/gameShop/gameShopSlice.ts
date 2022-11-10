import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import { IGame } from '../../../types/gameType';

interface GamesState {
  games: IGame[],
  darkMode: boolean,
}

const initialState: GamesState = {
  games: [],
  darkMode: false,
}

export const gameShopSlice = createSlice({
  name: 'gameShop',
  initialState,
  reducers: {
    setGamesState: (state, action: PayloadAction<IGame[]>) => {
      state.games = action.payload;
    },
    setDarkMode: (state)=>{
      state.darkMode = !state.darkMode
    }
  },
})

export const { setGamesState, setDarkMode } = gameShopSlice.actions

export default gameShopSlice.reducer