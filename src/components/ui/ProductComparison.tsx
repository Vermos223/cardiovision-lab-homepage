import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import GlobalImage from '../../components/common/GlobalImage';
interface ProductCompareItemProps {
  image: string;
  name: string;
  tagline: string;
  price: string;
  colors: string[];
  features: string[];
  linkUrl: string;
  isNew?: boolean;
}

const ProductCompareItem: React.FC<ProductCompareItemProps> = ({
  image,
  name,
  tagline,
  price,
  colors,
  features,
  linkUrl,
  isNew = false
}) => {
  return (
    <div className="flex flex-col items-center text-center">
      {isNew && (
        <div className="bg-orange-500 text-white text-xs py-1 px-2 rounded-full mb-2">
          New
        </div>
      )}

      <div className="h-[180px] w-full relative mb-6">
        <GlobalImage
          src={image}
          alt={name}
          fill
          className="object-contain"
        />
      </div>

      <div className="space-y-1 mb-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-sm">{tagline}</p>
        <p className="text-sm">From {price}</p>
      </div>

      <div className="flex justify-center space-x-1 my-3">
        {colors.map((color, index) => (
          <span
            key={index}
            className="h-4 w-4 rounded-full"
            style={{ backgroundColor: color }}
            aria-label={`${color} color`}
          />
        ))}
      </div>

      <ul className="text-sm space-y-2 mb-4">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <Link
        href={linkUrl}
        className="text-apple-link-blue hover:underline text-sm"
      >
        Buy
        <span className="ml-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 14 14" className="inline-block fill-current">
            <path d="M0,7.05a1,1,0,0,0,.29.74l5.69,5.69a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41L3.81,8.47h9.22a1,1,0,0,0,0-2H3.81L7.4,2.88A1,1,0,0,0,6,1.47L.29,7.17A1,1,0,0,0,0,7.05Z" transform="translate(14) rotate(180)"/>
          </svg>
        </span>
      </Link>
    </div>
  );
};

interface ProductComparisonProps {
  products: ProductCompareItemProps[];
}

export default function ProductComparison({ products }: ProductComparisonProps) {
  return (
    <div className="py-16 bg-white">
      <div className="normal-container">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">Which iPhone is right for you?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCompareItem key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}
