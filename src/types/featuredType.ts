import { GameType } from "./gameType";

export interface FeaturedType{
    name?: string,
    discount?: {
        title: string,
        discount: number,
    },
    imageUrl: string
}
