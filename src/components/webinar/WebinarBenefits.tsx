
import React from 'react';
import { CheckCircle } from 'lucide-react';

interface WebinarBenefitsProps {
  benefits: string[];
}

const WebinarBenefits = ({ benefits }: WebinarBenefitsProps) => {
  return (
    <>
      <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
        <CheckCircle className="h-5 w-5 text-secondary mr-2" />
        Why This Webinar Is Essential
      </h3>
      
      <ul className="space-y-3 mb-8">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start bg-white p-3 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
            <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{benefit}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default WebinarBenefits;
