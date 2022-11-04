import { AnyAction } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { getGames } from '@/lib/queries/game';
import { setGamesState } from './gameShopSlice';
import { RootState } from '@/store/store';


export const startSanityGames = (): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch, getState) => {
        const games = await getGames();

        dispatch(setGamesState(games))
        // console.log(getState());
    }
}

