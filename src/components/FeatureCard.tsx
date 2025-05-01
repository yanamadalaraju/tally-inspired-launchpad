import React from 'react';
import { DivideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ElementType; // Accepts any React component
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  className = '' 
}) => {
  return (
    <div className={`bg-white rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg ${className}`}>
      <div className="p-3 bg-blue-100 rounded-full inline-block mb-4">
        <Icon className="h-6 w-6 text-blue-700" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
