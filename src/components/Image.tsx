import { urlFor } from '@/lib/sanity'

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