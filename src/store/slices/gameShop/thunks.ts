import { AnyAction } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { getGames } from '@/lib/queries/game';
import { setIsLoading } from './gameShopSlice';
import { RootState } from '@/store/store';
import { getFeatured } from '@/lib/queries/featured';


export const startSanityGames = (): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch, getState) => {

    }
}


