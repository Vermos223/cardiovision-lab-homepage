'use client'

// src/components/common/GlobalImage.tsx
import Image, { ImageProps } from 'next/image';
import { usePathname } from 'next/navigation';

// 扩展 ImageProps 类型，确保所有 Image 组件的属性都能传递
const GlobalImage = ({ src, ...props }: ImageProps) => {
  const pathname = usePathname();
  
  // 在生产环境中添加basePath
  const basePath = process.env.NODE_ENV === 'production' ? '/cardiovision-lab-homepage' : '';
  
  // 确保src存在且是字符串类型
  if (typeof src === 'string') {
    // 确保src以斜杠开头
    const normalizedSrc = src.startsWith('/') ? src : `/${src}`;
    // 添加basePath
    const fullSrc = `${basePath}${normalizedSrc}`;
    
    return <Image src={fullSrc} {...props} />;
  }
  
  // 如果src不是字符串（可能是StaticImageData或其他类型），直接传递
  return <Image src={src} {...props} />;
};

export default GlobalImage;