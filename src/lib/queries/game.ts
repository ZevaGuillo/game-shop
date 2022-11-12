import { GameType } from "../../types/gameType";
import client from "../sanity";

const query = `*[_type == "game"] {
    _id,
    name,
    "discount":
    *[_type == "discounts" && references(^._id)]{
      title,
      discount
    }
  }`;


export const getGames = async (): Promise<GameType[]> =>{
  const results = await client.fetch(query);
  return results;
};
