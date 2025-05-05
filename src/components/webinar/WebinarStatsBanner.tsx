
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

const WebinarStatsBanner = () => {
  return (
    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-gray-200 rounded-lg p-3">
      <div className="flex items-start">
        <div className="mr-2">
          <div className="bg-secondary/20 p-1.5 rounded-full">
            <Users className="h-5 w-5 text-secondary" />
          </div>
        </div>
        <div className="leading-snug">
          <h4 className="font-semibold text-primary text-sm">
            Limited to 100 Attendees Only
          </h4>
          <p className="text-gray-600 text-sm">
            Our exclusive webinars fill up rapidly. Register now to get priority access and receive a complimentary business assessment worth ₹19549 – even if you can't attend live.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebinarStatsBanner;

