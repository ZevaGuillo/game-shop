import sanityClient from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

const client = sanityClient({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
    dataset: import.meta.env.VITE_SANITY_DATASET,
    apiVersion: "2021-10-21",
    useCdn: true,
})


const builder = imageUrlBuilder(client)

export function urlFor(source:any) {
  return builder.image(source)
}


export default client;