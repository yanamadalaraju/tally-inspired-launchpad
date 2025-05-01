import React from 'react';
import Button from './Button';
import { Check } from 'lucide-react';

interface PricingFeature {
  text: string;
  available: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: PricingFeature[];
  isPopular?: boolean;
  buttonText?: string;
  buttonVariant?: 'primary' | 'outline';
  onClick?: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  period,
  description,
  features,
  isPopular = false,
  buttonText = 'Get Started',
  buttonVariant = 'primary',
  onClick,
}) => {
  return (
    <div className={`
      bg-white rounded-lg shadow-md p-6 border 
      ${isPopular ? 'border-blue-500 relative' : 'border-gray-200'}
      transition-all duration-300 hover:shadow-xl
    `}>
      {isPopular && (
        <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
          Popular
        </div>
      )}
      
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold">{price}</span>
        {period && <span className="text-gray-500">/{period}</span>}
      </div>
      
      <p className="text-gray-600 mb-6">{description}</p>
      
      <hr className="my-6 border-gray-200" />
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check 
              className={`mr-2 h-5 w-5 mt-0.5 flex-shrink-0 ${feature.available ? 'text-blue-500' : 'text-gray-300'}`} 
            />
            <span className={feature.available ? 'text-gray-700' : 'text-gray-400'}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
      
      <Button
        variant={buttonVariant}
        fullWidth
        onClick={onClick}
        className={isPopular ? '!bg-blue-600 hover:!bg-blue-700' : ''}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default PricingCard;