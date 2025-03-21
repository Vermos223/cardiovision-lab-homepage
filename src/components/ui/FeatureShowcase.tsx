import React from 'react';
import Image from 'next/image';
import GlobalImage from '../../components/common/GlobalImage';
interface FeatureProps {
  icon: string;
  title: string;
  description: string;
  iconSize?: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, iconSize=48 }) => {
  return (
    <div className="flex flex-col items-center text-center max-w-xs mx-auto">
      <div className={"mb-4 relative"} style={{width: `${iconSize}px`, height: `${iconSize}px`}}>
        <GlobalImage
          src={icon}
          alt={title}
          width={iconSize}
          height={iconSize}
          className="object-contain"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

interface FeatureShowcaseProps {
  title: string;
  subtitle?: string;
  features: FeatureProps[];
  bgColor?: string;
  darkText?: boolean;
  iconSize?: number;
}

export default function FeatureShowcase({
  title,
  subtitle,
  features,
  bgColor = 'white',
  darkText = true,
  iconSize = 128
}: FeatureShowcaseProps) {
  const textColor = darkText ? 'text-black' : 'text-white';
  const subtitleColor = darkText ? 'text-gray-600' : 'text-gray-300';
  
  // 根据features数量计算合适的列数
  const getGridClass = () => {
    const count = features.length;
    
    if (count === 1) return "grid-cols-1";
    else if (count === 2) return "grid-cols-1 sm:grid-cols-2";
    else return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
  };

  return (
    <div className={`pt-8 pb-8 bg-${bgColor}`} style={{ backgroundColor: bgColor }}>
      <div className="normal-container">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-semibold mb-3 ${textColor}`}>{title}</h2>
          {subtitle && <p className={`text-lg ${subtitleColor}`}>{subtitle}</p>}
        </div>
  
        <div className={`grid ${getGridClass()} gap-12`}>
          {features.map((feature, index) => (
            <div key={index} className="px-4">
              <Feature
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                iconSize={iconSize}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
