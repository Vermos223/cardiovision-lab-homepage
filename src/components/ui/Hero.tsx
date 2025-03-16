import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  primaryLink: {
    text: string;
    url: string;
  };
  secondaryLink?: {
    text: string;
    url: string;
  };
  image: string;
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
  darkText = false,
  bgColor
}: HeroProps) {
  const textColorClass = darkText ? 'text-black' : 'text-white';
  const bgColorStyle = bgColor ? { backgroundColor: bgColor } : {};

  return (
    <div className="relative w-full h-[580px] md:h-[700px] flex flex-col items-center pt-[50px]" style={bgColorStyle}>
      {/* Text content */}
      <div className={`z-20 text-center ${textColorClass} mt-10`}>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold">{title}</h2>
        <h3 className="text-xl md:text-2xl lg:text-3xl mt-1 font-medium">{subtitle}</h3>
        {description && <p className="mt-3 text-base md:text-lg">{description}</p>}

        <div className="flex items-center justify-center space-x-7 mt-4">
          <Link
            href={primaryLink.url}
            className="text-apple-link-blue text-xl hover:underline flex items-center"
          >
            {primaryLink.text}
            <span className="ml-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" className="fill-current">
                <path d="M0,7.05a1,1,0,0,0,.29.74l5.69,5.69a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41L3.81,8.47h9.22a1,1,0,0,0,0-2H3.81L7.4,2.88A1,1,0,0,0,6,1.47L.29,7.17A1,1,0,0,0,0,7.05Z" transform="translate(14) rotate(180)"/>
              </svg>
            </span>
          </Link>

          {secondaryLink && (
            <Link
              href={secondaryLink.url}
              className="text-apple-link-blue text-xl hover:underline flex items-center"
            >
              {secondaryLink.text}
              <span className="ml-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" className="fill-current">
                  <path d="M0,7.05a1,1,0,0,0,.29.74l5.69,5.69a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41L3.81,8.47h9.22a1,1,0,0,0,0-2H3.81L7.4,2.88A1,1,0,0,0,6,1.47L.29,7.17A1,1,0,0,0,0,7.05Z" transform="translate(14) rotate(180)"/>
                </svg>
              </span>
            </Link>
          )}
        </div>
      </div>

      {/* Background image */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Optional tag line */}
      <div className="absolute bottom-5 w-full text-center z-20">
        <p className={`text-sm ${textColorClass}`}>Built for Fruit Intelligence.</p>
      </div>
    </div>
  );
}
