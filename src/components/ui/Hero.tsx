'use client'
import React, { useRef } from 'react';
import GlobalImage from '../../components/common/GlobalImage';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  imageSize?: 'full' | 'large' | 'medium' | 'small';
  darkText?: boolean;
  bgColor?: string;
}

export default function Hero({
  title,
  subtitle,
  description,
  image,
  imageSize = 'full',
  darkText = false,
  bgColor
}: HeroProps) {
  const textColorClass = darkText ? 'text-black' : 'text-white';
  const bgColorStyle = bgColor ? { backgroundColor: bgColor } : {};
  const heroRef = useRef<HTMLDivElement>(null);

  const titleParts = title.split(' ');
  const firstLine = titleParts[0];
  const secondLine = titleParts.slice(1).join(' ');

  const getImageContainerClass = () => {
    switch(imageSize) {
      case 'small': return 'w-1/2 h-2/3 mx-auto mt-auto';
      case 'medium': return 'w-3/4 h-3/4 mx-auto mt-auto';
      case 'large': return 'w-5/6 h-5/6 mx-auto mt-auto';
      case 'full':
      default: return 'inset-0';
    }
  };

  return (
    <div
      ref={heroRef}
      className="relative w-full h-[480px] md:h-[540px] overflow-hidden"
      style={bgColorStyle}
    >
      <div className="sticky top-0 z-20 w-full px-4 md:px-32 pt-6 max-w-[1400px] mx-auto">
        <div className="w-full">
          <h2 className={`text-5xl md:text-6xl lg:text-7xl font-semibold ${textColorClass}`}>
            {firstLine}
          </h2>
          <h2 className={`text-5xl md:text-6xl lg:text-7xl font-semibold ${textColorClass}`}>
            {secondLine}
          </h2>

          {subtitle && (
            <h3 className={`text-xl md:text-2xl lg:text-3xl font-medium ${textColorClass} mt-2 text-left`}>
              {subtitle}
            </h3>
          )}

          {description && (
            <p className={`mt-3 text-base md:text-lg ${textColorClass} text-left`}>
              {description}
            </p>
          )}
        </div>
      </div>

      <div className={`absolute z-10 overflow-hidden ${getImageContainerClass()}`}>
        {image.toLowerCase().endsWith('.gif') ? (
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover object-right"
          />
        ) : (
          <GlobalImage
            src={image}
            alt={title}
            fill
            className="object-cover object-right"
            priority
          />
        )}
      </div>

      <div className="absolute bottom-5 w-full text-center z-20">
        <p className={`text-sm ${textColorClass}`}>@CardioVision Lab.</p>
      </div>
    </div>
  );
}