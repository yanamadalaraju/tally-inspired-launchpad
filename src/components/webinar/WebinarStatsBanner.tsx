
// import React from 'react';
// import { Users } from 'lucide-react';

// const WebinarStatsBanner = () => {
//   return (
//     <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-gray-200 rounded-lg p-5">
//       <div className="flex items-start">
//         <div className="mr-4">
//           <div className="bg-secondary/20 p-3 rounded-full">
//             <Users className="h-6 w-6 text-secondary" />
//           </div>
//         </div>
//         <div>
//           <h4 className="font-semibold text-primary">Limited to 100 Attendees Only</h4>
//           <p className="text-gray-600">
//             Our exclusive webinars fill up rapidly. Register now to get priority access and receive 
//             a complimentary business assessment worth $299 – even if you can't attend live.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WebinarStatsBanner;
import React from 'react';
import { Users } from 'lucide-react';
import FAQSection from '../FAQSection';

const WebinarStatsBanner = () => {
  const handleClick = () => {
    const formSection = document.getElementById('formSection');
    if (formSection) {
      const offsetTop = formSection.offsetTop;
      const offset = 80;
      window.scrollTo({ top: offsetTop - offset, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 min-h-[300px]">
      <div className="flex items-start mb-4">
        <div className="mr-4">
          <div className="bg-blue-500 p-3 rounded-full">
            <Users className="h-6 w-6 text-white" />
          </div>
        </div>
        <div className="leading-snug">
          <h4 className="font-semibold text-primary text-lg mb-2">
            Limited to 100 Attendees Only
          </h4>
          <p className="text-gray-700 text-sm mb-4">
            Our exclusive webinars fill up quickly! Secure your spot today and get priority access to the session. 
            Plus, receive a complimentary business assessment worth ₹19,549 – even if you can't attend live.
          </p>
          <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/80 transition-colors duration-300" onClick={handleClick}>
            Register Now
          </button>
        </div>
      </div>
      <FAQSection />
    </div>
  );
};

export default WebinarStatsBanner;

