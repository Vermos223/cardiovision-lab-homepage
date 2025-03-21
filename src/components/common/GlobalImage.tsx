'use client'

import Image, { ImageProps } from 'next/image';

const GlobalImage = ({ src, ...props }: ImageProps) => {
  if (typeof src === 'string') {
    // 使用完整的绝对URL
    const baseUrl = process.env.NODE_ENV === 'production' 
      ? 'https://vermos223.github.io/cardiovision-lab-homepage'
      : '';
    
    const normalizedSrc = src.startsWith('/') ? src : `/${src}`;
    const fullSrc = `${baseUrl}${normalizedSrc}`;
    
    return <Image src={fullSrc} {...props} />;
  }
  
  return <Image src={src} {...props} />;
};

export default GlobalImage;