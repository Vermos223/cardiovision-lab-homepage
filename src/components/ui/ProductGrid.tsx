import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import GlobalImage from '../../components/common/GlobalImage';
interface ProductTileProps {
  title: string;
  subtitle: string;
  image: string;
  primaryLink: {
    text: string;
    url: string;
  };
  secondaryLink?: {
    text: string;
    url: string;
  };
  bgColor?: string;
  darkText?: boolean;
  logo?: string;
  tagline?: string;
}

const ProductTile: React.FC<ProductTileProps> = ({
  title,
  subtitle,
  image,
  primaryLink,
  secondaryLink,
  bgColor = '#ffffff',
  darkText = true,
  logo,
  tagline
}) => {
  const textColorClass = darkText ? 'text-black' : 'text-white';

  return (
    <div
      className="relative w-full h-[500px] flex flex-col items-center justify-start overflow-hidden rounded-2xl"
      style={{ backgroundColor: bgColor }}
    >
      {/* Content */}
      <div className={`z-20 text-center ${textColorClass} mt-12 px-5`}>
        {logo ? (
          <GlobalImage
            src={logo}
            alt={title}
            width={200}
            height={50}
            className="mx-auto mb-3"
          />
        ) : (
          <h3 className="text-3xl font-semibold">{title}</h3>
        )}
        <p className="text-xl mt-2">{subtitle}</p>

        <div className="flex items-center justify-center space-x-5 mt-3">
          <Link
            href={primaryLink.url}
            className="text-apple-link-blue hover:underline flex items-center"
          >
            {primaryLink.text}
            <span className="ml-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 14 14" className="fill-current">
                <path d="M0,7.05a1,1,0,0,0,.29.74l5.69,5.69a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41L3.81,8.47h9.22a1,1,0,0,0,0-2H3.81L7.4,2.88A1,1,0,0,0,6,1.47L.29,7.17A1,1,0,0,0,0,7.05Z" transform="translate(14) rotate(180)"/>
              </svg>
            </span>
          </Link>

          {secondaryLink && (
            <Link
              href={secondaryLink.url}
              className="text-apple-link-blue hover:underline flex items-center"
            >
              {secondaryLink.text}
              <span className="ml-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 14 14" className="fill-current">
                  <path d="M0,7.05a1,1,0,0,0,.29.74l5.69,5.69a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41L3.81,8.47h9.22a1,1,0,0,0,0-2H3.81L7.4,2.88A1,1,0,0,0,6,1.47L.29,7.17A1,1,0,0,0,0,7.05Z" transform="translate(14) rotate(180)"/>
                </svg>
              </span>
            </Link>
          )}
        </div>
      </div>

      {/* Background image */}
      <div className="absolute inset-0 z-10 flex items-center justify-center mt-24">
        <GlobalImage
          src={image}
          alt={title}
          width={500}
          height={350}
          className="object-contain"
        />
      </div>

      {/* Tagline (like "Built for Apple Intelligence") */}
      {tagline && (
        <div className="absolute bottom-5 w-full text-center z-20">
          <p className={`text-sm ${textColorClass}`}>{tagline}</p>
        </div>
      )}
    </div>
  );
};

interface ProductGridProps {
  products: ProductTileProps[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 px-3 my-3">
      {products.map((product, index) => (
        <ProductTile key={index} {...product} />
      ))}
    </div>
  );
}
