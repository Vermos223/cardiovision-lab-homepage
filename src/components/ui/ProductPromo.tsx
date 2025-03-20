import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProductPromoProps {
  title: string;
  subtitle: string;
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
  darkText?: boolean;
  bgColor?: string;
  logoImage?: string;
  isSmall?: boolean;
}

export default function ProductPromo({
  title,
  subtitle,
  description,
  primaryLink,
  secondaryLink,
  image,
  darkText = false,
  bgColor,
  logoImage,
  isSmall = false
}: ProductPromoProps) {
  const textColorClass = darkText ? 'text-black' : 'text-white';
  const bgColorStyle = bgColor ? { backgroundColor: bgColor } : {};
  const containerHeightClass = isSmall ? 'h-[500px]' : 'h-[580px]';

  return (
    <div className={`relative w-full ${containerHeightClass} flex flex-col items-center `} style={bgColorStyle}>
      {/* Text content */}
      <div className={`z-20 text-center ${textColorClass} mt-10`}>
        {logoImage ? (
          <div className="mx-auto h-16 mb-3 flex items-center justify-center">
            <Image
              src={logoImage}
              alt={`${title} logo`}
              width={160}
              height={40}
              className="object-contain"
            />
          </div>
        ) : (
          <h2 className="text-3xl md:text-4xl font-semibold">{title}</h2>
        )}

        <h3 className="text-base md:text-lg mt-1 mx-auto px-8 md:px-12 leading-tight max-w-[85%]">{subtitle}</h3>
        {description && <p className="mt-2 text-md">{description}</p>}
        
        {/* Links */}
        {(primaryLink || secondaryLink) && (
        <div className="flex items-center justify-center space-x-7 mt-3">
          {primaryLink && (
          <Link
            href={primaryLink.url}
            className="text-apple-link-blue text-md hover:underline flex items-center"
          >
            {primaryLink.text}
            <span className="ml-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 14 14" className="fill-current">
                <path d="M0,7.05a1,1,0,0,0,.29.74l5.69,5.69a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41L3.81,8.47h9.22a1,1,0,0,0,0-2H3.81L7.4,2.88A1,1,0,0,0,6,1.47L.29,7.17A1,1,0,0,0,0,7.05Z" transform="translate(14) rotate(180)"/>
              </svg>
            </span>
          </Link>
          )}

          {secondaryLink && (
            <Link
              href={secondaryLink.url}
              className="text-apple-link-blue text-md hover:underline flex items-center"
            >
              {secondaryLink.text}
              <span className="ml-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 14 14" className="fill-current">
                  <path d="M0,7.05a1,1,0,0,0,.29.74l5.69,5.69a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41L3.81,8.47h9.22a1,1,0,0,0,0-2H3.81L7.4,2.88A1,1,0,0,0,6,1.47L.29,7.17A1,1,0,0,0,0,7.05Z" transform="translate(14) rotate(180)"/>
                </svg>
              </span>
            </Link>
          )}
        </div>
        )}
      </div>
      

      {/* Background image */}
      <div className="mt-auto w-full flex justify-center">
        <div className="relative w-full md:w-auto flex justify-center">
          <Image
            src={image}
            alt={title}
            width={600}
            height={450}
            className="object-contain w-auto h-auto max-w-full"
            priority
          />
        </div>
      </div>
    </div>
  );
}
