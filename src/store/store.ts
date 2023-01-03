import { configureStore } from '@reduxjs/toolkit'
import gameShopSliceReducer from './gameShop/gameShopSlice'
import authSliceReduce from './auth/authSlice'

export const store = configureStore({
  reducer: {
    auth: authSliceReduce,
    gameShop: gameShopSliceReducer,
  },
})

// Types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch