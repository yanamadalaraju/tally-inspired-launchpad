import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  position,
  company,
  image,
}) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <img 
          src={image} 
          alt={`${author} from ${company}`} 
          className="w-14 h-14 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="text-lg font-semibold text-gray-800">{author}</h4>
          <p className="text-sm text-gray-600">{position}, {company}</p>
        </div>
      </div>
      <blockquote className="text-gray-700 italic relative">
        <span className="text-4xl text-blue-200 absolute -top-4 -left-2">"</span>
        <p className="relative z-10 pl-4">{quote}</p>
        <span className="text-4xl text-blue-200 absolute bottom-0 right-0">"</span>
      </blockquote>
    </div>
  );
};

export default TestimonialCard;