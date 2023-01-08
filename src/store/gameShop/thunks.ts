import { AnyAction } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { setIsLoading } from './gameShopSlice';
import { RootState } from '@/store/store';


export const startSanityHome = (): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch, getState) => {
        dispatch(setIsLoading(true));

        dispatch(setIsLoading(false));
    
    }
}


