import { urlFor } from '@/lib/sanity'
import React from 'react'

type ImageProps={
    url: string, 
    className?: string,
}

const Image = ({url, className}:ImageProps) => {
  return (
    <picture>
      <img className={className} src={urlFor(url).url()} loading="lazy"/>
    </picture>
  )
}

export default Image