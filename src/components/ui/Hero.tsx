'use client'
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import GlobalImage from '../../components/common/GlobalImage';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryLink?: {
    text: string;
    url: string;
  };
  secondaryLink?: {
    text: string;
    url: string;
  };
  image: string;
  imageSize?: 'full' | 'large' | 'medium' | 'small';
  darkText?: boolean;
  bgColor?: string;
}

export default function Hero({
  title,
  subtitle,
  description,
  primaryLink,
  secondaryLink,
  image,
  imageSize = 'full',
  darkText = false,
  bgColor
}: HeroProps) {
  const textColorClass = darkText ? 'text-black' : 'text-white';
  const bgColorStyle = bgColor ? { backgroundColor: bgColor } : {};
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentStyle, setContentStyle] = useState<React.CSSProperties>({});
  const [isMobile, setIsMobile] = useState(false);
  const [gifStarted, setGifStarted] = useState(false);
  const originalGifUrl = useRef(image);
  const staticImageUrl = useRef('');

  const titleParts = title.split(' ');
  const firstLine = titleParts[0];
  const secondLine = titleParts.slice(1).join(' ');

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (image.toLowerCase().endsWith('.gif')) {
      const gifPath = image;
      const staticPath = image.replace('.gif', '_static.jpg');
      originalGifUrl.current = gifPath;
      staticImageUrl.current = gifPath;
    }
  }, [image]);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !contentRef.current) return;
      
      const heroRect = heroRef.current.getBoundingClientRect();
      const contentRect = contentRef.current.getBoundingClientRect();
      
      let newStyle: React.CSSProperties = {};
      
      if (heroRect.top <= 0) {
        if (heroRect.bottom >= contentRect.height + 50) {
          newStyle = {
            position: 'fixed',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            maxWidth: '1400px'
          };
        } else {
          const offsetY = heroRect.bottom - contentRect.height - 50;
          newStyle = {
            position: 'fixed',
            top: `${Math.min(0, offsetY)}px`,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            maxWidth: '1400px'
          };
        }
      } else {
        newStyle = {
          position: 'relative',
          transform: 'none'
        };
      }
      
      setContentStyle(newStyle);
      
      if (window.scrollY > 0 && !gifStarted) {
        setGifStarted(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [gifStarted]);

  const getImageContainerClass = () => {
    switch(imageSize) {
      case 'small': return 'w-1/2 h-2/3 mx-auto mt-auto';
      case 'medium': return 'w-3/4 h-3/4 mx-auto mt-auto';
      case 'large': return 'w-5/6 h-5/6 mx-auto mt-auto';
      case 'full':
      default: return 'inset-0';
    }
  };

  const getTitleFontSize = () => {
    return isMobile ? '3rem' : '4rem';
  };

  return (
    <div 
      ref={heroRef}
      className="relative w-full h-[480px] md:h-[540px] overflow-hidden"
      style={bgColorStyle}
    >
      <div 
        ref={contentRef}
        className="z-20 w-full px-4 md:px-32 pt-6 max-w-[1400px] mx-auto"
        style={contentStyle}
      >
        <div className="w-full">
          <h2 
            className={`font-semibold ${textColorClass}`} 
            style={{
              fontSize: getTitleFontSize(),
              display: 'block'
            }}
          >
            {firstLine}
          </h2>
          <h2 
            className={`font-semibold ${textColorClass}`} 
            style={{
              fontSize: getTitleFontSize(),
              display: 'block'
            }}
          >
            {secondLine}
          </h2>
          
          {subtitle && (
            <h3 
              className={`text-xl md:text-2xl lg:text-3xl font-medium ${textColorClass} mt-2`}
              style={{
                textAlign: 'left',
                maxWidth: '100%'
              }}
            >
              {subtitle}
            </h3>
          )}
          
          {description && (
            <p 
              className={`mt-3 text-base md:text-lg ${textColorClass}`}
              style={{
                textAlign: 'left',
                maxWidth: '100%'
              }}
            >
              {description}
            </p>
          )}
        </div>
      </div>
      
      <div className={`absolute z-10 overflow-hidden ${getImageContainerClass()}`}>
        {image.toLowerCase().endsWith('.gif') ? (
          <img
            src={gifStarted ? originalGifUrl.current : staticImageUrl.current || originalGifUrl.current}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover object-right"
            style={{
              transition: 'opacity 0.3s ease-in-out'
            }}
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