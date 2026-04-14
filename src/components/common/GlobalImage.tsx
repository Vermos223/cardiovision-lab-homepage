'use client'

import Image, { ImageProps } from 'next/image';

const GlobalImage = ({ src, ...props }: ImageProps) => {
  if (typeof src === 'string') {
    const basePath = process.env.NODE_ENV === 'production' ? '/cardiovision-lab-homepage' : '';
    const normalizedSrc = src.startsWith('/') ? src : `/${src}`;
    const fullSrc = `${basePath}${normalizedSrc}`;

    return <Image src={fullSrc} {...props} />;
  }

  return <Image src={src} {...props} />;
};

export default GlobalImage;