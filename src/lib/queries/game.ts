import { GameType } from "../../types/gameType";
import client from "../sanity";

const query = `*[_type == "game"] {
    _id,
    name,
    "backgroundUrl": coverPage.asset->url,
    genders[]->{
      name
    }
    "discount":
    *[_type == "discounts" && references(^._id)]{
      title,
      discount
    },
    platforms[]->{
      name
    }
  }`;


export const getGames = async (): Promise<GameType[]> => {
  const results = await client.fetch(query);
  return results;
};


export const getGamesWithFilter = async (): Promise<GameType[]> => {
  const results = await client.fetch(`
  *[_type == "game"] {
    _id,
    name,
    "backgroundUrl": coverPage.asset->url,
    genders[]->{
      name
    }
    "discount":
    *[_type == "discounts" && references(^._id)]{
      title,
      discount
    },
    platforms[]->{
      name
    }
  }`);
  return results;
};


// Query para filtrar por un genero
// *[_type == "game" && *[_type=="gender" && slug.current=="racing"]._id match genders[]._ref] {
//   _id,
//   name,
// }`);

// Query para filtrar por varios generos
// *[_type == "game" && *[_type=="gender" && slug.current in ["fantasy","adventure"] ]._id match genders[]._ref] {
//   _id,
//   name,
// }`);


// Query para filtrar por varios platforms 
// *[_type == "game" && *[_type=="platform" && name in ["NINTENDO","XBOX"] ]._id match platforms[]._ref] {
//   _id,
//   name,
// }`);
