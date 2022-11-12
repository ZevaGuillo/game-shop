import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import { GameType } from '../../../types/gameType';
import { FeaturedType } from '@/types/featuredType';

interface GamesState {
  games: GameType[],
  featured: FeaturedType[],
  isLoading: boolean,
  darkMode: boolean,
}

const initialState: GamesState = {
  games: [],
  featured: [],
  isLoading: false,
  darkMode: false,
}

export const gameShopSlice = createSlice({
  name: 'gameShop',
  initialState,
  reducers: {
    setGamesState: (state, action: PayloadAction<GameType[]>) => {
      state.games = action.payload;
    },
    setFeatured: (state, action: PayloadAction<FeaturedType[]>) => {
      state.featured = action.payload;
    },
    setIsLoading: (state, action:PayloadAction<boolean>)=>{
      state.isLoading = action.payload;
    },
    setDarkMode: (state) => {
      state.darkMode = !state.darkMode
    }
  },
})

export const { setGamesState, setFeatured, setIsLoading, setDarkMode } = gameShopSlice.actions

export default gameShopSlice.reducer