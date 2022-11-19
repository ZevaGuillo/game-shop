export interface GameType{
    name: string,
    imageUrl: string,
    featured?: boolean,
}

export type IGamesList = {
    games: [GameType]
}