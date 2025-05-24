
// import React from 'react';
// import { Calendar, Clock, BarChart2 } from 'lucide-react';

// const WebinarDetailsCard = () => {
//   return (
//     <div className="bg-primary/5 rounded-lg p-6 mb-8 border border-primary/10 shadow-sm">
//       <div className="flex items-start mb-4">
//         <Calendar className="h-5 w-5 text-secondary mr-3 mt-1" />
//         <div>
//           <h4 className="font-semibold text-primary">Next Webinar Date</h4>
//           <p>Thursday, May 15th, 2025 at 11:00 AM EST</p>
//         </div>
//       </div>
//       <div className="flex items-start mb-4">
//         <Clock className="h-5 w-5 text-secondary mr-3 mt-1" />
//         <div>
//           <h4 className="font-semibold text-primary">Duration</h4>
//           <p>45 minutes + 15 minutes Q&A session</p>
//         </div>
//       </div>
//       <div className="flex items-start">
//         <BarChart2 className="h-5 w-5 text-secondary mr-3 mt-1" />
//         <div>
//           <h4 className="font-semibold text-primary">Expert Presenters</h4>
//           <p>Industry specialists with over 15 years of experience</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WebinarDetailsCard;

//-------------working code---->

// import React from 'react';
// import { Calendar, Clock, BarChart2, Users } from 'lucide-react';

// const WebinarDetailsCard = () => {
//   return (
//     <div className="bg-white rounded-lg p-6 mb-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
//       <h3 className="text-xl font-bold text-primary mb-4">Webinar Overview</h3>

//       <div className="flex items-start mb-4">
//         <Calendar className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
//         <div>
//           <h4 className="font-semibold text-primary text-sm">Next Webinar Date</h4>
//           <p className="text-sm text-gray-700">Thursday, May 15th, 2025 at 11:00 AM EST</p>
//         </div>
//       </div>

//       <div className="flex items-start mb-4">
//         <Clock className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
//         <div>
//           <h4 className="font-semibold text-primary text-sm">Duration</h4>
//           <p className="text-sm text-gray-700">45 minutes of presentation, followed by a 15-minute Q&A session</p>
//         </div>
//       </div>

//       <div className="flex items-start mb-4">
//         <Users className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
//         <div>
//           <h4 className="font-semibold text-primary text-sm">Expert Presenters</h4>
//           <p className="text-sm text-gray-700">Industry specialists with over 15 years of experience, providing insights into the latest trends and solutions.</p>
//         </div>
//       </div>

//       <div className="flex items-start">
//         <BarChart2 className="h-5 w-5 text-purple-500 mr-3 mt-0.5" />
//         <div>
//           <h4 className="font-semibold text-primary text-sm">Key Takeaways</h4>
//           <p className="text-sm text-gray-700">
//             • Master advanced inventory management techniques <br />
//             • Learn how to streamline operations and boost profitability <br />
//             • Gain practical insights into optimizing your business strategy<br />
//             • Discover the latest technologies for improving supply chain efficiency

//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WebinarDetailsCard;


// import React from 'react';
// import { Calendar, Clock, BarChart2, Users } from 'lucide-react';

// const WebinarDetailsCard = ({ title, date, time, ampm, duration, presenters, takeaways }) => {
//   return (
//     <div className="bg-white rounded-lg p-6 mb-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 min-h-[300px]">
//       <h3 className="text-xl font-bold text-primary mb-4">{title}</h3>

//       <div className="flex items-start mb-4">
//         <Calendar className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
//         <div>
//           <h4 className="font-semibold text-primary text-sm">Next Webinar Date</h4>
//           <p className="text-sm text-gray-700">
//             {new Date(date).toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' })} at {time} {ampm}
//           </p>
//         </div>
//       </div>

//       <div className="flex items-start mb-4">
//         <Clock className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
//         <div>
//           <h4 className="font-semibold text-primary text-sm">Duration</h4>
//           <p className="text-sm text-gray-700">{duration}</p>
//         </div>
//       </div>

//       <div className="flex items-start mb-4">
//         <Users className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
//         <div>
//           <h4 className="font-semibold text-primary text-sm">Expert Presenters</h4>
//           <p className="text-sm text-gray-700">{presenters}</p>
//         </div>
//       </div>

//       <div className="flex items-start">
//         <BarChart2 className="h-5 w-5 text-purple-500 mr-3 mt-0.5" />
//         <div>
//           <h4 className="font-semibold text-primary text-sm">Key Takeaways</h4>
//           <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
//             {takeaways.map((item, index) => (
//               <li key={index}>{item}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WebinarDetailsCard;

// import React, { useEffect, useRef, useState } from 'react';
// import { Calendar, Clock, BarChart2, Users } from 'lucide-react';

// const WebinarDetailsCard = ({ title, date, time, ampm, duration, presenters, takeaways }) => {
//   const contentRef = useRef(null);
//   const [isOverflowing, setIsOverflowing] = useState(false);

//   useEffect(() => {
//     const el = contentRef.current;
//     if (el) {
//       setIsOverflowing(el.scrollHeight > el.offsetHeight);
//     }
//   }, [title, date, time, ampm, duration, presenters, takeaways]);

//   return (
//     <div className="relative w-full h-full bg-white rounded-lg p-4 sm:p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">

//       {/* Fading Overlay + Message when content overflows */}
//       {isOverflowing && (
//         <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent z-10 flex items-end justify-center pointer-events-none">
//           <span className="text-xs text-gray-500 pb-2">Maximum content limit reached</span>
//         </div>
//       )}

//       <div ref={contentRef} className="relative z-0 max-h-[70vh] overflow-y-auto pr-2">
//         <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4">{title}</h3>

//         <div className="flex items-start mb-4">
//           <Calendar className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
//           <div>
//             <h4 className="font-semibold text-primary text-sm">Next Webinar Date</h4>
//             <p className="text-sm text-gray-700">
//               {new Date(date).toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' })} at {time} {ampm}
//             </p>
//           </div>
//         </div>

//         <div className="flex items-start mb-4">
//           <Clock className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
//           <div>
//             <h4 className="font-semibold text-primary text-sm">Duration</h4>
//             <p className="text-sm text-gray-700">{duration}</p>
//           </div>
//         </div>

//         <div className="flex items-start mb-4">
//           <Users className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
//           <div>
//             <h4 className="font-semibold text-primary text-sm">Expert Presenters</h4>
//             <p className="text-sm text-gray-700">{presenters}</p>
//           </div>
//         </div>

//         <div className="flex items-start">
//           <BarChart2 className="h-5 w-5 text-purple-500 mr-3 mt-0.5" />
//           <div>
//             <h4 className="font-semibold text-primary text-sm">Key Takeaways</h4>
//             <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
//               {takeaways.map((item, index) => (
//                 <li key={index}>{item}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WebinarDetailsCard;

import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Clock, BarChart2, Users } from 'lucide-react';

interface WebinarDetailsCardProps {
  title: string;
  date: string;
  time: string;
  ampm: string;
  duration: string;
  presenters: string;
  takeaways: string[];
  whatsapp_link: string;
  onEdit: () => void;
}

const WebinarDetailsCard: React.FC<WebinarDetailsCardProps> = ({
  title,
  date,
  time,
  ampm,
  duration,
  presenters,
  takeaways,
  whatsapp_link,
  onEdit,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const el = contentRef.current;
    if (el) {
      setIsOverflowing(el.scrollHeight > el.offsetHeight);
    }
  }, [title, date, time, ampm, duration, presenters, takeaways]);

  return (
    <div className="relative w-full h-full bg-white rounded-lg p-4 sm:p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">

      {/* Fading Overlay + Message when content overflows */}
      {isOverflowing && (
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent z-10 flex items-end justify-center pointer-events-none">
          <span className="text-xs text-gray-500 pb-2">Maximum content limit reached</span>
        </div>
      )}

      <div ref={contentRef} className="relative z-0 max-h-[70vh] overflow-y-auto pr-2">
        <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4">{title}</h3>

        <div className="flex items-start mb-4">
          <Calendar className="h-5 w-5 text-blue-500 mr-3 mt-0.5" />
          <div>
            <h4 className="font-semibold text-primary text-sm">Next Webinar Date</h4>
            <p className="text-sm text-gray-700">
              {new Date(date).toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' })} at {time} {ampm}
            </p>
          </div>
        </div>

        <div className="flex items-start mb-4">
          <Clock className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
          <div>
            <h4 className="font-semibold text-primary text-sm">Duration</h4>
            <p className="text-sm text-gray-700">{duration}</p>
          </div>
        </div>

        <div className="flex items-start mb-4">
          <Users className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
          <div>
            <h4 className="font-semibold text-primary text-sm">Expert Presenters</h4>
            <p className="text-sm text-gray-700">{presenters}</p>
          </div>
        </div>

        <div className="flex items-start">
          <BarChart2 className="h-5 w-5 text-purple-500 mr-3 mt-0.5" />
          <div>
            <h4 className="font-semibold text-primary text-sm">Key Takeaways</h4>
            <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
              {takeaways.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* WhatsApp Link Section */}
        {/* {whatsapp_link && (
          <div className="mt-4">
            <h4 className="font-semibold text-primary text-sm">Join WhatsApp Group</h4>
            <a
              href={whatsapp_link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              {whatsapp_link}
            </a>
          </div>
        )} */}

        {/* Edit Button */}
        {/* <button
          onClick={onEdit}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          ✏️ Edit Webinar
        </button> */}
      </div>
    </div>
  );
};

export default WebinarDetailsCard;
