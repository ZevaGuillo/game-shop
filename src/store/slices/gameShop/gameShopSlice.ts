import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import { IGame } from '../../../types/gameType';

interface GamesState {
  games: IGame[]
}

const initialState: GamesState = {
  games: [],
}

export const gameShopSlice = createSlice({
  name: 'gameShop',
  initialState,
  reducers: {
    setGamesState: (state, action: PayloadAction<IGame[]>) => {
      state.games = action.payload;
    },
  },
})

export const { setGamesState } = gameShopSlice.actions

export default gameShopSlice.reducer