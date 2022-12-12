export interface GameType{
    name: string,
    backgroundUrl: string,
    coverUrl: string,
    featured?: boolean,
    gender?: string[]
}

export type IGamesList = {
    games: [GameType]
}