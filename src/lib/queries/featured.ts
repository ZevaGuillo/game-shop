
import { FeaturedType } from "@/types/featuredType";
import client from "../sanity";

const query = `*[_type == "game" && featured==true] {
  _id,
  name,
  featured,
  "imageUrl": image.asset->url,
  "discount":
    *[_type == "discounts" && references(^._id)]{
      title,
      discount
    }
}`;


export const getFeatured = async (): Promise<FeaturedType[]> =>{
  const results = await client.fetch(query);
  return results;
};
