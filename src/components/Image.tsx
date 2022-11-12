import { urlFor } from '@/lib/sanity'
import React from 'react'

type ImageProps={
    url: string
}

const Image = ({url}:ImageProps) => {
  return (
    <img src={urlFor(url).url()} loading="lazy"/>
  )
}

export default Image