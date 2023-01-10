import { PlatformType } from "@/types/platformType";
import client from "../sanity";

const query = `*[_type == "platform"] {
  _id,
  name,
}`;


export const getPlatform = async (): Promise<PlatformType[]> =>{
  const results = await client.fetch(query);
  return results;
};
