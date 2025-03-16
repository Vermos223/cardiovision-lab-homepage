import React from 'react';
import Image from 'next/image';

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center max-w-xs mx-auto">
      <div className="w-12 h-12 mb-4 relative">
        <Image
          src={icon}
          alt={title}
          width={48}
          height={48}
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
}

export default function FeatureShowcase({
  title,
  subtitle,
  features,
  bgColor = 'white',
  darkText = true
}: FeatureShowcaseProps) {
  const textColor = darkText ? 'text-black' : 'text-white';
  const subtitleColor = darkText ? 'text-gray-600' : 'text-gray-300';

  return (
    <div className={`py-16 bg-${bgColor}`} style={{ backgroundColor: bgColor }}>
      <div className="apple-container">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-semibold mb-3 ${textColor}`}>{title}</h2>
          {subtitle && <p className={`text-lg ${subtitleColor}`}>{subtitle}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
