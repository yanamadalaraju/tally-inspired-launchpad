// import React from "react";

// const features = [
//   { label: "Outstanding Management", angle: -60 },
//   { label: "Cost Analysis", angle: -20 },
//   { label: "Cash Flow", angle: 20 },
//   { label: "Inventory Management", angle: 60 },
//   { label: "MIS Reports", angle: 100 },
//   { label: "Compliance", angle: 140 },
//   { label: "Adapting Technology", angle: 180 },
// ];

// const degToRad = (deg: number) => (deg * Math.PI) / 180;
// const radius = 150;

// const FeaturesDiagram: React.FC = () => {
//   return (
//     <section className="flex justify-center items-center py-24 bg-gradient-to-b from-gray-100 to-white">
//       <div className="relative w-[420px] h-[420px]">
//         {/* Central Circle */}
//         <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-extrabold text-xl -translate-x-1/2 -translate-y-1/2 shadow-2xl transition-transform duration-300 hover:scale-105 cursor-default select-none">
//           Your Business
//         </div>

//         {features.map(({ label, angle }, idx) => {
//           const rad = degToRad(angle);
//           const x = 210 + radius * Math.cos(rad);
//           const y = 210 + radius * Math.sin(rad);
//           const arrowLength = radius - 48;

//           // Calculate arrow line end point for SVG
//           const arrowX = 210 + arrowLength * Math.cos(rad);
//           const arrowY = 210 + arrowLength * Math.sin(rad);

//           return (
//             <div key={idx}>
//               {/* Arrow SVG */}
//               <svg
//                 className="absolute top-0 left-0 pointer-events-none"
//                 width="420"
//                 height="420"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <defs>
//                   <marker
//                     id={`arrowhead-${idx}`}
//                     markerWidth="8"
//                     markerHeight="8"
//                     refX="5"
//                     refY="4"
//                     orient="auto"
//                     markerUnits="strokeWidth"
//                   >
//                     <path d="M0,0 L8,4 L0,8 L2,4 Z" fill="#3b82f6" />
//                   </marker>
//                 </defs>
//                 <line
//                   x1="210"
//                   y1="210"
//                   x2={arrowX}
//                   y2={arrowY}
//                   stroke="#3b82f6"
//                   strokeWidth="3"
//                   markerEnd={`url(#arrowhead-${idx})`}
//                   className="opacity-0 animate-fade-slide"
//                   style={{ animationDelay: `${idx * 0.15}s`, animationFillMode: "forwards" }}
//                 />
//               </svg>

//               {/* Feature Label */}
//               <div
//                 className="absolute flex flex-col items-center text-center w-32 cursor-pointer select-none transition-transform duration-300 hover:scale-110"
//                 style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
//                 title={label}
//               >
//                 <div className="mb-2 px-2 py-1 bg-white rounded-full shadow-lg border border-blue-300 text-blue-700 font-semibold text-sm">
//                   {label}
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Tailwind CSS animations */}
//       <style>{`
//         @keyframes fade-slide {
//           0% {
//             opacity: 0;
//             transform: translateY(10px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fade-slide {
//           animation-name: fade-slide;
//           animation-duration: 0.6s;
//           animation-timing-function: ease-out;
//           animation-fill-mode: forwards;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default FeaturesDiagram;

import React from "react";

const features = [
  { label: "Outstanding Management", angle: -60 },
  { label: "Cost Analysis", angle: -20 },
  { label: "Cash Flow", angle: 20 },
  { label: "Inventory Management", angle: 60 },
  { label: "MIS Reports", angle: 100 },
  { label: "Compliance", angle: 140 },
  { label: "Adapting Technology", angle: 180 },
];

const degToRad = (deg: number) => (deg * Math.PI) / 180;
const radius = 150;

const FeaturesDiagram: React.FC = () => {
  return (
    <section className="flex justify-center items-center py-28 bg-gradient-to-b from-gray-900 to-black">
      <div className="relative w-[460px] h-[460px]">
        {/* Rotating ring behind center */}
        <div className="absolute top-1/2 left-1/2 w-[280px] h-[280px] border-4 border-blue-500 rounded-full opacity-30 animate-spin-slow -translate-x-1/2 -translate-y-1/2" />

        {/* Center Circle with pulse */}
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center text-white font-extrabold text-2xl -translate-x-1/2 -translate-y-1/2 shadow-[0_0_25px_#3b82f6] animate-pulse-slow select-none">
          Your Business
        </div>

        {features.map(({ label, angle }, idx) => {
          const rad = degToRad(angle);
          const x = 230 + radius * Math.cos(rad);
          const y = 230 + radius * Math.sin(rad);
          const arrowLength = radius - 50;

          const arrowX = 230 + arrowLength * Math.cos(rad);
          const arrowY = 230 + arrowLength * Math.sin(rad);

          return (
            <div key={idx}>
              {/* Glowing Arrow SVG */}
              <svg
                className="absolute top-0 left-0 pointer-events-none"
                width="460"
                height="460"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <filter id={`glow-${idx}`} x="-50%" y="-50%" width="200%" height="200%" >
                    <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#60a5fa" floodOpacity="0.8"/>
                    <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#3b82f6" floodOpacity="0.6"/>
                  </filter>
                  <marker
                    id={`arrowhead-${idx}`}
                    markerWidth="10"
                    markerHeight="10"
                    refX="6"
                    refY="5"
                    orient="auto"
                    markerUnits="strokeWidth"
                  >
                    <path d="M0,0 L10,5 L0,10 L3,5 Z" fill="#60a5fa" />
                  </marker>
                </defs>
                <line
                  x1="230"
                  y1="230"
                  x2={arrowX}
                  y2={arrowY}
                  stroke="#60a5fa"
                  strokeWidth="4"
                  markerEnd={`url(#arrowhead-${idx})`}
                  filter={`url(#glow-${idx})`}
                  className="opacity-0 animate-fade-slide"
                  style={{ animationDelay: `${idx * 0.18}s`, animationFillMode: "forwards" }}
                />
              </svg>

              {/* Feature Label with glowing effect */}
              <div
                className="absolute flex flex-col items-center text-center w-36 cursor-pointer select-none transition-transform duration-300 hover:scale-110"
                style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
                title={label}
              >
                <div className="mb-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold text-lg shadow-[0_0_12px_#2563eb] hover:shadow-[0_0_20px_#3b82f6] transition-shadow duration-300">
                  {label}
                </div>
              </div>
            </div>
          );
        })}

      </div>

      {/* Extra Tailwind Animations */}
      <style>{`
        @keyframes fade-slide {
          0% {
            opacity: 0;
            transform: translateY(15px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-slide {
          animation-name: fade-slide;
          animation-duration: 0.7s;
          animation-timing-function: ease-out;
          animation-fill-mode: forwards;
        }
        @keyframes pulse-slow {
          0%, 100% {
            box-shadow: 0 0 25px 5px #3b82f6;
          }
          50% {
            box-shadow: 0 0 40px 10px #60a5fa;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default FeaturesDiagram;
