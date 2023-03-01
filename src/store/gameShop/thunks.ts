import { AnyAction } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { addGameShoppingCart, addNewFavorite, removeFavorite, removeGameShoppingCart, setFavorites, setShoppingCart } from './gameShopSlice';
import { RootState } from '@/store/store';
import { GameType } from '@/types/gameType';
import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite'
import { FirebaseDB } from '@/firebase/config';
import { loadFavorites, loadShoppingCart } from '@/helpers/loadFirebase';


export const startAddFavorite = (game: GameType): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth;
        // console.log(game);
        const favGame: GameType = {...game}
        const newdoc = doc(collection(FirebaseDB, `${uid}/gameshop/favorites`))

        favGame.id = newdoc.id;
        
        await setDoc(newdoc, favGame);


        dispatch(addNewFavorite(favGame))
    }
}

export const startRemoveFavorite = (game: GameType): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth;
        const {favorites} = getState().gameShop;
        // console.log(game);
        const currentGame = favorites.find(g => g.name === game.name)
        
        const docref = doc(FirebaseDB, `${uid}/gameshop/favorites/${currentGame?.id}`)
        
        await deleteDoc(docref)
        console.log(docref, currentGame);

        dispatch(removeFavorite(docref.id))
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

export const startAddGame = (game: GameType): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth;
        // console.log(game);
        const gameshoppingCart: GameType = {...game}
        const newdoc = doc(collection(FirebaseDB, `${uid}/gameshop/shoppingCart`))

        gameshoppingCart.id = newdoc.id;
        
        await setDoc(newdoc, gameshoppingCart);

        dispatch(addGameShoppingCart(gameshoppingCart))
    }
}

export const startRemoveGame = (game: GameType): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth;
        const {favorites} = getState().gameShop;
        // console.log(game);
        const currentGame = favorites.find(g => g.name === game.name)
        
        const docref = doc(FirebaseDB, `${uid}/gameshop/shoppingCart/${currentGame?.id}`)
        
        await deleteDoc(docref)
        console.log(docref, currentGame);

        dispatch(removeGameShoppingCart(docref.id))
    }
}

export const startLoadingShoppingCart = (): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        
        if(!uid) throw new Error('El UID del usuario no existe');

        const games = await loadShoppingCart(uid);

        dispatch(setShoppingCart(games))

    }
}