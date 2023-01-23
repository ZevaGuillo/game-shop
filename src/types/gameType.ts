export interface GameType{
    name: string,
    backgroundUrl: string,
    coverUrl: string,
    slug?: string,
    featured?: boolean,
    genders?: {
        name: string
    }[],
    platforms: {
        name: string
    }[],
    price?:number,
    description?: string
}

export type IGamesList = {
    games: [GameType]
}