
// import React from 'react';
// import WebinarRegistrationForm from './webinar/WebinarRegistrationForm';
// import WebinarBenefits from './webinar/WebinarBenefits';
// import WebinarDetailsCard from './webinar/WebinarDetailsCard';
// import WebinarStatsBanner from './webinar/WebinarStatsBanner';
// import { Shield } from 'lucide-react';

// const WebinarForm = () => {
//   const webinarBenefits = [
//     "Master advanced inventory management techniques",
//     "Discover AI-powered financial insights and forecasting",
//     "Learn one-click GST compliance and automated filing",
//     "See how to generate comprehensive business reports in seconds"
//   ];

//   return (
//     <section id="webinar" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row gap-12">
//           <div className="lg:w-1/2 order-2 lg:order-1">
//             <WebinarRegistrationForm />
//           </div>
          
//           <div className="lg:w-1/2 order-1 lg:order-2">
//             <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
//               Revolutionize Your Business Management
//             </h2>
            
//             <p className="text-gray-600 mb-6 text-lg">
//               Join our power-packed webinar to discover how our intelligent business management solution 
//               can transform your operations, boost profitability by up to 30%, and ensure total compliance.
//             </p>
            
//             <WebinarDetailsCard />
            
//             <WebinarBenefits benefits={webinarBenefits} />
            
//             <WebinarStatsBanner />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WebinarForm;

import React from 'react';
import WebinarRegistrationForm from './webinar/WebinarRegistrationForm';
import WebinarBenefits from './webinar/WebinarBenefits';
import WebinarDetailsCard from './webinar/WebinarDetailsCard';
import WebinarStatsBanner from './webinar/WebinarStatsBanner';
import  Image  from '../assets/business-marketing.jpg';

const WebinarForm = () => {
  const webinarBenefits = [
    "Master advanced inventory management techniques",
    
    "Learn one-click GST compliance and automated filing",
    "Generate business reports in seconds",
    "Automate supply chain operations effortlessly",
    "Get real-time inventory visibility across locations",
    "Improve cash flow with financial analytics",
    "Boost profitability by reducing manual tasks",
    
    "Get live answers from top industry experts"
  ];

  return (
    <section id="webinar" className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        
        {/* Top Centered Benefits Section with reduced spacing */}
        {/* Top Centered Benefits Section with reduced spacing */}
        



        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Side: Registration Form */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <WebinarRegistrationForm />
          </div>

          {/* Right Side: Webinar Info Section */}
          <div className="lg:w-1/2 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Revolutionize Your Business Management
            </h2>

            <p className="text-gray-600 mb-4 text-base">
              Join our power-packed webinar to discover how our intelligent business management solution 
              can transform your operations, boost profitability by up to 30%, and ensure total compliance.
            </p>

            <WebinarDetailsCard />
            <WebinarStatsBanner />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 pt-4 mb-8">
  {/* Webinar Benefits */}
  <div className="w-full max-w-2xl">
    <WebinarBenefits benefits={webinarBenefits} />
  </div>

  {/* Webinar Image */}
  <div className="w-full lg:w-1/3 flex justify-center pt-6 lg:pt-10 lg:mt-0 lg:ml-10 lg:mr-10">
    <img
      src={Image} // Replace with your image path
      alt="Webinar"
      className="w-72 h-60 md:w-80 md:h-72 lg:w-96 lg:h-80 rounded-lg shadow-lg object-cover"
    />
  </div>
</div>
      </div>
    </section>
  );
};

export default WebinarForm;
