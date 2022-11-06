import { IGame } from "../../types/gameType";
import client from "../sanity";

const query = `*[_type == "game"] {
    _id,
    name,  
  }`;


export const getGames = async (): Promise<IGame[]> =>{
  const results = await client.fetch(query);
  return results;
};
