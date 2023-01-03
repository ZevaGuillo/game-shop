import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { GameType } from '../../types/gameType';
import { FeaturedType } from '@/types/featuredType';
import { GenderType } from '@/types/genderType';

interface GamesState {
  isLoading: boolean,
  genders: string[],
  darkMode: boolean,
}

const initialState: GamesState = {
  isLoading: false,
  genders: [],
  darkMode: false,
}

export const gameShopSlice = createSlice({
  name: 'gameShop',
  initialState,
  reducers: {
    setGenders: (state,  action:PayloadAction<string[]>)=>{
      state.genders = action.payload;
    },
    setIsLoading: (state, action:PayloadAction<boolean>)=>{
      state.isLoading = action.payload;
    },
    setDarkMode: (state) => {
      state.darkMode = !state.darkMode
    }
  },
})

export const { setGenders, setIsLoading, setDarkMode } = gameShopSlice.actions

export default gameShopSlice.reducer