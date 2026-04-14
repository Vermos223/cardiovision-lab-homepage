'use client'

import Image, { ImageProps } from 'next/image';

const GlobalImage = ({ src, ...props }: ImageProps) => {
  if (typeof src === 'string') {
    const normalizedSrc = src.startsWith('/') ? src : `/${src}`;
    return <Image src={normalizedSrc} {...props} />;
  }

  return <Image src={src} {...props} />;
};

export default GlobalImage;