import { FirebaseDB } from "@/firebase/config";
import { GameType } from "@/types/gameType";
import { collection, getDocs } from "firebase/firestore/lite";

export const loadFavorites = async(uid = '')=> {
    if( !uid ) throw new Error('El uid del usuario no existe');

    const collectionRef = collection( FirebaseDB, `${uid}/gameshop/favorites` );
    const docs = await getDocs(collectionRef);

    const games:GameType[] = []
    docs.forEach(doc => games.push({ ...doc.data() as GameType}))
    
    return games

}