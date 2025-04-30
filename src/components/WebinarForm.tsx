
import React from 'react';
import WebinarRegistrationForm from './webinar/WebinarRegistrationForm';
import WebinarBenefits from './webinar/WebinarBenefits';
import WebinarDetailsCard from './webinar/WebinarDetailsCard';
import WebinarStatsBanner from './webinar/WebinarStatsBanner';
import { Shield } from 'lucide-react';

const WebinarForm = () => {
  const webinarBenefits = [
    "Master advanced inventory management techniques",
    "Discover AI-powered financial insights and forecasting",
    "Learn one-click GST compliance and automated filing",
    "See how to generate comprehensive business reports in seconds"
  ];

  return (
    <section id="webinar" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <WebinarRegistrationForm />
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Revolutionize Your Business Management
            </h2>
            
            <p className="text-gray-600 mb-6 text-lg">
              Join our power-packed webinar to discover how our intelligent business management solution 
              can transform your operations, boost profitability by up to 30%, and ensure total compliance.
            </p>
            
            <WebinarDetailsCard />
            
            <WebinarBenefits benefits={webinarBenefits} />
            
            <WebinarStatsBanner />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebinarForm;
