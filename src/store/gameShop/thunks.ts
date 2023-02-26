import { AnyAction } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { addNewFavorite, setFavorites } from './gameShopSlice';
import { RootState } from '@/store/store';
import { GameType } from '@/types/gameType';
import { collection, doc, setDoc } from 'firebase/firestore/lite'
import { FirebaseDB } from '@/firebase/config';
import { loadFavorites } from '@/helpers/loadFirebase';


export const startAddFavorite = (game: GameType): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth;
        // console.log(game);

        const newdoc = doc(collection(FirebaseDB, `${uid}/gameshop/favorites`))
        const setDocResponse = await setDoc(newdoc, game);

        console.log(setDocResponse);

        dispatch(addNewFavorite(game))
    }
}

export const startLoadingFavorites = (): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        
        if(!uid) throw new Error('El UID del usuario no existe');

        const games = await loadFavorites(uid);

        dispatch(setFavorites(games))

    }
}

