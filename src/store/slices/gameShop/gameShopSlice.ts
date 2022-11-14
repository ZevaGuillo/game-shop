import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import { GameType } from '../../../types/gameType';
import { FeaturedType } from '@/types/featuredType';

interface GamesState {
  isLoading: boolean,
  darkMode: boolean,
}

const initialState: GamesState = {
  isLoading: false,
  darkMode: false,
}

export const gameShopSlice = createSlice({
  name: 'gameShop',
  initialState,
  reducers: {
    setIsLoading: (state, action:PayloadAction<boolean>)=>{
      state.isLoading = action.payload;
    },
    setDarkMode: (state) => {
      state.darkMode = !state.darkMode
    }
  },
})

export const { setIsLoading, setDarkMode } = gameShopSlice.actions

export default gameShopSlice.reducer