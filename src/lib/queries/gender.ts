import { GenderType } from "@/types/genderType";
import client from "../sanity";

const query = `*[_type == "gender"] {
  _id,
  name,
  "backgroundUrl": background.asset->url,
}`;


export const getGender = async (): Promise<GenderType[]> =>{
  const results = await client.fetch(query);
  return results;
};
