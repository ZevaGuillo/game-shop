export interface GameType{
    name: string,
    backgroundUrl: string,
    featured?: boolean,
    coverUrl: string,
}

export type IGamesList = {
    games: [GameType]
}