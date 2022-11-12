import { AnyAction } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { getGames } from '@/lib/queries/game';
import { setFeatured, setGamesState, setIsLoading } from './gameShopSlice';
import { RootState } from '@/store/store';
import { getFeatured } from '@/lib/queries/featured';


export const startSanityGames = (): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch, getState) => {
        dispatch(setIsLoading(true))

        const games = await getGames();
        dispatch(setGamesState(games))

        dispatch(setIsLoading(false))
    }
}

export const startSanityFeatured = (): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch, getState) => {
        dispatch(setIsLoading(true))

        const featured = await getFeatured();
        dispatch(setFeatured(featured))

        dispatch(setIsLoading(false))
    }
}

