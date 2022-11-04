import { configureStore } from '@reduxjs/toolkit'
import gameShopSliceReducer from './slices/gameShop/gameShopSlice'

export const store = configureStore({
  reducer: {
    gameShop: gameShopSliceReducer,
  },
})

// Types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch