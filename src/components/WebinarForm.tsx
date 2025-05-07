
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

// import React from 'react';
// import WebinarRegistrationForm from './webinar/WebinarRegistrationForm';
// import WebinarBenefits from './webinar/WebinarBenefits';
// import WebinarDetailsCard from './webinar/WebinarDetailsCard';
// import WebinarStatsBanner from './webinar/WebinarStatsBanner';
// import Image from '../assets/business-marketing.jpg';

// const WebinarForm = () => {
//   const webinarBenefits = [
//     "Master advanced inventory management techniques",
//     "Learn one-click GST compliance and automated filing",
//     "Generate business reports in seconds",
//     "Automate supply chain operations effortlessly",
//     "Get real-time inventory visibility across locations",
//     "Improve cash flow with financial analytics",
//     "Boost profitability by reducing manual tasks",
//     "Get live answers from top industry experts"
//   ];

//   return (
//     <section id="webinar" className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
//       <div className="container mx-auto px-6">
//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-semibold text-primary mb-4">
//             Revolutionize Your Business Management
//           </h2>
//           <p className="text-lg text-gray-600">
//             Join our power-packed webinar to discover how our intelligent business management solution can 
//             transform your operations, boost profitability by up to 30%, and ensure total compliance.
//           </p>
//         </div>

//         {/* Main Content Section */}
//         <div className="flex flex-col lg:flex-row gap-12 items-center">
//           {/* Left Side: Registration Form */}
//           <div className="lg:w-1/2 order-2 lg:order-1">
//             <WebinarRegistrationForm />
//           </div>

//           {/* Right Side: Webinar Info Section */}
//           <div className="lg:w-1/2 order-1 lg:order-2">
//             <WebinarDetailsCard />
//             <WebinarStatsBanner />
//           </div>
//         </div>

//         {/* Webinar Benefits and Image Section */}
//         <div className="flex flex-col lg:flex-row justify-center items-center gap-10 pt-10 lg:pt-16">
//           {/* Webinar Benefits */}
//           <div className="w-full lg:w-1/2 max-w-xl mb-8 lg:mb-0">
//             <WebinarBenefits benefits={webinarBenefits} />
//           </div>

//           {/* Webinar Image */}
//           <div className="w-full lg:w-1/3 flex justify-center">
//             <img
//               src={Image}
//               alt="Webinar"
//               className="w-72 h-60 md:w-80 md:h-72 lg:w-96 lg:h-80 rounded-lg shadow-xl object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WebinarForm;

import React from 'react';
import  { useEffect, useState } from 'react';
import WebinarBenefits from './webinar/WebinarBenefits';
import WebinarDetailsCard from './webinar/WebinarDetailsCard';
import WebinarStatsBanner from './webinar/WebinarStatsBanner';
import Image from '../assets/business-marketing.jpg';
import FAQSection from './FAQSection';
import axios from 'axios';

const WebinarForm = () => {
  const [webinars, setWebinars] = useState([]);
  useEffect(() => {
    const fetchWebinars = async () => {
      try {
        const response = await axios.get('http://localhost:5000/webinars');
        const formattedData = response.data.map(w => ({
          ...w,
          takeaways: JSON.parse(w.takeaways || '[]'),
        }));
        setWebinars(formattedData);
      } catch (error) {
        console.error('Error fetching webinars:', error);
      }
    };

    fetchWebinars();
  }, []);

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

  const webinarData = {
    title: 'Webinar Overview',
    date: 'Thursday, May 15th, 2025 at 11:00 AM EST',
    duration: '45 minutes of presentation, followed by a 15-minute Q&A session',
    presenters:
      'Industry specialists with over 15 years of experience, providing insights into the latest trends and solutions.',
    takeaways: [
      'Master advanced inventory management techniques',
      'Learn how to streamline operations and boost profitability',
      'Gain practical insights into optimizing your business strategy',
      'Discover the latest technologies for improving supply chain efficiency',
    ],
  };

  return (
    <section id="webinar" className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-primary mb-4">
            Revolutionize Your Business Management
          </h2>
          <p className="text-lg text-gray-600">
            Join our power-packed webinar to discover how our intelligent business management solution can 
            transform your operations, boost profitability by up to 30%, and ensure total compliance.
          </p>
        </div>

        {/* Webinar Info Section */}
        {/* Webinar Info Section */}
    <div className="flex flex-col lg:flex-row gap-12 mb-12">
      {/* Left Side: Webinar Details Cards */}
      <div className="lg:w-1/2 flex flex-wrap gap-6">
        {webinars.map((webinar) => (
          <div className="w-full md:w-1/2 lg:w-full">
            <WebinarDetailsCard key={webinar.id} {...webinar} />
          </div>
        ))}
      </div>

          {/* Right Side: Webinar Stats Banner */}
          <div className="lg:w-1/2">
            <WebinarStatsBanner />
          </div>
        </div>

        {/* Webinar Benefits and Image Section */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 pt-10 lg:pt-16">
          {/* Webinar Benefits */}
          <div className="w-full lg:w-1/2 max-w-xl mb-8 lg:mb-0">
            <WebinarBenefits benefits={webinarBenefits} />
          </div>

          {/* Webinar Image */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <img
              src={Image}
              alt="Webinar"
              className="w-72 h-60 md:w-80 md:h-72 lg:w-96 lg:h-80 rounded-lg shadow-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebinarForm;
