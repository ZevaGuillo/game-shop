import { urlFor } from "@/lib/sanity";

type ImageProps = {
  url: string;
  className?: string;
  alt?: string;
};

const Image = ({ url, className, alt }: ImageProps) => {
  return (
    <picture>
      <img
        className={className}
        src={urlFor(url).url()}
        loading="lazy"
        alt={alt}
        width={190}
        height={208}
      />
    </picture>
  );
};

export default Image;
