import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { GameType } from '../../types/gameType';
import { FeaturedType } from '@/types/featuredType';
import { GenderType } from '@/types/genderType';
import { PlatformType } from '@/types/platformType';

interface GamesState {
  isLoading: boolean,
  genders: string[],
  platforms: PlatformType[],
  favorites: GameType[],
  shoppingCart: GameType[],
  darkMode: boolean,
}

const initialState: GamesState = {
  isLoading: false,
  genders: [],
  platforms: [],
  favorites: [],
  shoppingCart: [],
  darkMode: false,
}

export const gameShopSlice = createSlice({
  name: 'gameShop',
  initialState,
  reducers: {
    setGenders: (state,  action:PayloadAction<string[]>)=>{
      state.genders = action.payload;
    },
    setPlatforms: (state,  action:PayloadAction<PlatformType[]>)=>{
      state.platforms = action.payload;
    },
    setIsLoading: (state, action:PayloadAction<boolean>)=>{
      state.isLoading = action.payload;
    },
    addfavorite: (state,  action:PayloadAction<GameType>)=>{
      state.favorites.push(action.payload)
    },
    setDarkMode: (state) => {
      state.darkMode = !state.darkMode
    }
  },
})

export const { setGenders, setPlatforms, setIsLoading, addfavorite, setDarkMode } = gameShopSlice.actions

export default gameShopSlice.reducer