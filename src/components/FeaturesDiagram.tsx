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

// import React from "react";
// import {
//   FaChartPie,
//   FaBalanceScale,
//   FaMoneyBillWave,
//   FaBoxes,
//   FaFileAlt,
//   FaShieldAlt,
//   FaCogs,
// } from "react-icons/fa";
// import './FeaturesDiagram.css';

// interface Feature {
//   label: string;
//   angle: number;
//   icon: React.ReactNode;
// }

// const features: Feature[] = [
//   { label: "Outstanding Management", angle: 300, icon: <FaChartPie className="text-blue-300" /> },
//   { label: "Cost Analysis", angle: 340, icon: <FaBalanceScale className="text-blue-300" /> },
//   { label: "Cash Flow", angle: 20, icon: <FaMoneyBillWave className="text-blue-300" /> },
//   { label: "Inventory Management", angle: 60, icon: <FaBoxes className="text-blue-300" /> },
//   { label: "MIS Reports", angle: 100, icon: <FaFileAlt className="text-blue-300" /> },
//   { label: "Compliance", angle: 140, icon: <FaShieldAlt className="text-blue-300" /> },
//   { label: "Adapting Technology", angle: 180, icon: <FaCogs className="text-blue-300" /> },
// ];

// const FeatureCircle = () => {
//   const centerX = 200;
//   const centerY = 200;
//   const radius = 120;
//   const iconDistance = 160;

//   return (
//     <div className="relative w-[400px] h-[400px] mx-auto">
//       <svg width="100%" height="100%">
//         {features.map((feature, idx) => {
//           const angleRad = (feature.angle * Math.PI) / 180;
//           const x = centerX + radius * Math.cos(angleRad);
//           const y = centerY + radius * Math.sin(angleRad);

//           const iconX = centerX + iconDistance * Math.cos(angleRad);
//           const iconY = centerY + iconDistance * Math.sin(angleRad);

//           return (
//             <React.Fragment key={idx}>
//               <defs>
//                 <marker
//                   id={`arrowhead-${idx}`}
//                   markerWidth="10"
//                   markerHeight="10"
//                   refX="5"
//                   refY="5"
//                   orient="auto-start-reverse"
//                   markerUnits="strokeWidth"
//                 >
//                   <path d="M0,0 L10,5 L0,10 Z" fill="#60a5fa" />
//                 </marker>
//               </defs>

//               {/* Arrow line */}
//               <line
//                 x1={centerX}
//                 y1={centerY}
//                 x2={x}
//                 y2={y}
//                 stroke="#60a5fa"
//                 strokeWidth="2"
//                 markerEnd={`url(#arrowhead-${idx})`}
//               />

//               {/* Icon + label */}
//               <foreignObject
//                 x={iconX - 40}
//                 y={iconY - 20}
//                 width={80}
//                 height={40}
//               >
//                 <div className="flex items-center justify-center text-center text-[10px] font-medium text-blue-300">
//                   <div className="flex flex-col items-center">
//                     <div className="text-lg">{feature.icon}</div>
//                     <div className="mt-1">{feature.label}</div>
//                   </div>
//                 </div>
//               </foreignObject>
//             </React.Fragment>
//           );
//         })}

//         {/* Center Circle */}
//         <circle
//           cx={centerX}
//           cy={centerY}
//           r="30"
//           fill="#1e3a8a"
//           className="drop-shadow-md"
//         />
//         <text
//           x={centerX}
//           y={centerY + 5}
//           textAnchor="middle"
//           fill="#fff"
//           fontSize="10"
//           fontWeight="bold"
//         >
//           Features
//         </text>
//       </svg>
//     </div>
//   );
// };

// export default FeatureCircle;



// import React from "react";
// import './FeaturesDiagram.css';
// import { FaChartPie, FaBalanceScale, FaMoneyBillWave, FaBoxes, FaFileAlt, FaShieldAlt, FaCogs } from "react-icons/fa";

// interface Feature {
//   label: string;
//   icon: JSX.Element;
// }

// const features: Feature[] = [
//   { label: "Outstanding Management", icon: <FaChartPie className="text-blue-300" /> },
//   { label: "Cost Analysis", icon: <FaBalanceScale className="text-blue-300" /> },
//   { label: "Cash Flow", icon: <FaMoneyBillWave className="text-blue-300" /> },
//   { label: "Inventory Management", icon: <FaBoxes className="text-blue-300" /> },
//   { label: "MIS Reports", icon: <FaFileAlt className="text-blue-300" /> },
//   { label: "Compliance", icon: <FaShieldAlt className="text-blue-300" /> },
//   { label: "Adapting Technology", icon: <FaCogs className="text-blue-300" /> },
// ];

// const degToRad = (deg: number): number => (deg * Math.PI) / 180;
// const outerRadius = 200;
// const innerRadius = 80;

// const FeaturesDiagram: React.FC = () => {
//   return (
//     <section className="flex justify-center items-center py-28 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
//       {/* Background glow */}
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-600 blur-3xl opacity-30"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-indigo-600 blur-3xl opacity-30"></div>
//       </div>

//       <div className="relative w-[500px] h-[500px] z-10">
//         {/* Rotating rings */}
//         <div className="absolute top-1/2 left-1/2 w-[420px] h-[420px] border-2 border-blue-400/30 rounded-full -translate-x-1/2 -translate-y-1/2 animate-spin-slow"></div>
//         <div className="absolute top-1/2 left-1/2 w-[380px] h-[380px] border-2 border-blue-400/20 rounded-full -translate-x-1/2 -translate-y-1/2 animate-spin-slow-reverse"></div>

//         {/* Core circle */}
//         <div className="absolute top-1/2 left-1/2 w-44 h-44 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-full flex items-center justify-center text-white font-bold text-xl tracking-wide shadow-[0_0_40px_10px_rgba(59,130,246,0.5)] animate-pulse-slow select-none border-4 border-white/10 backdrop-blur-md -translate-x-1/2 -translate-y-1/2 z-10">
//           <div className="text-center">
//             <div className="text-2xl font-extrabold mb-1">Your Business</div>
//             <div className="text-xs font-light opacity-80">CORE SYSTEM</div>
//           </div>
//         </div>

//         {/* Arrows and features */}
//         {features.map(({ label, icon }, idx) => {
//           const angle = (360 / features.length) * idx - 90; // -90 to start from top
//           const rad = degToRad(angle);
//           const outerX = 250 + outerRadius * Math.cos(rad);
//           const outerY = 250 + outerRadius * Math.sin(rad);
//           const innerX = 250 + innerRadius * Math.cos(rad);
//           const innerY = 250 + innerRadius * Math.sin(rad);

//           return (
//             <React.Fragment key={idx}>
//               <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" width="500" height="500">
//                 <defs>
//                   <linearGradient id={`lineGradient-${idx}`} x1="0%" y1="0%" x2="100%" y2="0%">
//                     <stop offset="0%" stopColor="#60a5fa" stopOpacity="1" />
//                     <stop offset="100%" stopColor="#818cf8" stopOpacity="0.9" />
//                   </linearGradient>
//                   <filter id={`glow-${idx}`} x="-50%" y="-50%" width="200%" height="200%">
//                     <feGaussianBlur stdDeviation="4" result="blur" />
//                     <feComposite in="SourceGraphic" in2="blur" operator="over" />
//                   </filter>
//                   <marker id={`arrowhead-${idx}`} markerWidth="12" markerHeight="12" refX="9" refY="6" orient="auto">
//                     <path d="M0,0 L12,6 L0,12 Z" fill="#60a5fa" />
//                   </marker>
//                 </defs>
//                 <line
//                   x1={innerX}
//                   y1={innerY}
//                   x2={outerX - Math.cos(rad) * 28}
//                   y2={outerY - Math.sin(rad) * 28}
//                   stroke={`url(#lineGradient-${idx})`}
//                   strokeWidth="2.5"
//                   markerEnd={`url(#arrowhead-${idx})`}
//                   filter={`url(#glow-${idx})`}
//                   className="opacity-0 animate-fade-slide"
//                   style={{
//                     animationDelay: `${idx * 0.15}s`,
//                     animationFillMode: "forwards"
//                   }}
//                 />
//               </svg>

//               <div
//                 className="absolute z-20 flex flex-col items-center text-center cursor-pointer select-none transition-all duration-500 hover:scale-110 group"
//                 style={{
//                   left: outerX,
//                   top: outerY,
//                   transform: "translate(-50%, -50%)",
//                 }}
//                 title={label}
//               >
//                 <div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 shadow-lg group-hover:shadow-xl group-hover:border-blue-400/50 transition-all duration-300">
//                   <div className="p-3 rounded-full bg-gradient-to-br from-blue-700 to-blue-800 shadow-inner group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
//                     {icon}
//                   </div>
//                   <span className="text-sm font-medium text-gray-200 whitespace-nowrap">
//                     {label}
//                   </span>
//                 </div>
//               </div>
//             </React.Fragment>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default FeaturesDiagram;

// import React, { useEffect, useRef, useState } from "react";
// import {
//   FaChartPie,
//   FaBalanceScale,
//   FaMoneyBillWave,
//   FaBoxes,
//   FaFileAlt,
//   FaShieldAlt,
//   FaCogs,
// } from "react-icons/fa";
// import './FeaturesDiagram.css';
// import { useInView } from 'react-intersection-observer';

// interface Feature {
//   label: string;
//   angle: number;
//   icon: React.ReactNode;
// }

// const features: Feature[] = [
//   { label: "Outstanding Management", angle: 300, icon: <FaChartPie /> },
//   { label: "Cost Analysis", angle: 340, icon: <FaBalanceScale /> },
//   { label: "Cash Flow", angle: 20, icon: <FaMoneyBillWave /> },
//   { label: "Inventory Management", angle: 60, icon: <FaBoxes /> },
//   { label: "MIS Reports", angle: 100, icon: <FaFileAlt /> },
//   { label: "Compliance", angle: 140, icon: <FaShieldAlt /> },
//   { label: "Adapting Technology", angle: 180, icon: <FaCogs /> },
// ];

// const FeatureCircle = () => {
//   const centerX = 300;
//   const centerY = 300;
//   const radius = 180;
//   const iconDistance = 250;
//   const [animationStarted, setAnimationStarted] = useState(false);
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.5,
//   });

//   useEffect(() => {
//     if (inView) {
//       setAnimationStarted(true);
//     }
//   }, [inView]);

//   return (
//     <div ref={ref} className="flex justify-start pl-4">
//       <div className="relative w-[600px] h-[600px]">
//         <svg width="100%" height="100%">
//           <defs>
//             {features.map((_, idx) => (
//               <marker
//                 key={idx}
//                 id={`arrowhead-${idx}`}
//                 markerWidth="10"
//                 markerHeight="10"
//                 refX="6"
//                 refY="5"
//                 orient="auto"
//                 markerUnits="strokeWidth"
//               >
//                 <path d="M0,0 L10,5 L0,10 Z" fill="#3b82f6" />
//               </marker>
//             ))}
//           </defs>

//           {features.map((feature, idx) => {
//             const angleRad = (feature.angle * Math.PI) / 180;
//             const x = centerX + radius * Math.cos(angleRad);
//             const y = centerY + radius * Math.sin(angleRad);

//             const iconX = centerX + iconDistance * Math.cos(angleRad);
//             const iconY = centerY + iconDistance * Math.sin(angleRad);

//             return (
//               <React.Fragment key={idx}>
//                 {/* Arrow line with animation */}
//                 <line
//                   x1={centerX}
//                   y1={centerY}
//                   x2={x}
//                   y2={y}
//                   stroke="#3b82f6"
//                   strokeWidth="2"
//                   markerEnd={`url(#arrowhead-${idx})`}
//                   className={`animated-arrow ${animationStarted ? 'animate-draw' : ''}`}
//                   style={{
//                     animationDelay: `${idx * 0.1}s`,
//                     opacity: animationStarted ? 1 : 0
//                   }}
//                 />

//                 {/* Icon + Label with animation */}
//                 <foreignObject
//                   x={iconX - 60}
//                   y={iconY - 30}
//                   width={120}
//                   height={60}
//                   style={{
//                     opacity: animationStarted ? 1 : 0,
//                     transition: `opacity 0.5s ease ${idx * 0.1 + 0.5}s, transform 0.3s ease`
//                   }}
//                 >
//                   <div className="feature-label">
//                     <div className="flex flex-col items-center">
//                       <div className="text-3xl hover:text-blue-800 transition-colors duration-300">
//                         {feature.icon}
//                       </div>
//                       <div className="text-sm mt-1">{feature.label}</div>
//                     </div>
//                   </div>
//                 </foreignObject>
//               </React.Fragment>
//             );
//           })}

//           {/* Center Circle with animation */}
//           <circle
//             cx={centerX}
//             cy={centerY}
//             r="45"
//             fill="#1e3a8a"
//             className={`drop-shadow-xl ${animationStarted ? 'scale-100' : 'scale-0'}`}
//             style={{
//               transition: 'transform 0.5s ease',
//               transformOrigin: 'center'
//             }}
//           />
//           <text
//             x={centerX}
//             y={centerY + 5}
//             textAnchor="middle"
//             fill="#fff"
//             fontSize="14"
//             fontWeight="bold"
//             style={{
//               opacity: animationStarted ? 1 : 0,
//               transition: 'opacity 0.5s ease 0.5s'
//             }}
//           >
//             Features
//           </text>
//         </svg>
//       </div>
//     </div>
//   );
// };

// export default FeatureCircle;
import React, { useEffect, useState } from "react";
import {
  FaChartPie, FaBalanceScale, FaMoneyBillWave,
  FaBoxes, FaFileAlt, FaShieldAlt, FaCogs,
} from "react-icons/fa";
import './FeaturesDiagram.css';
import { useInView } from 'react-intersection-observer';
import outstandingIcon from "../assets/outstanding.webp";
import costIcon from "../assets/cost.jpg";
import cashIcon from "../assets/cashflow.jpeg";
import inventoryIcon from "../assets/inventorymanagement.jpg";
import misIcon from "../assets/misreports.jpg";
import complianceIcon from "../assets/Compliance.jpg";
import techIcon from "../assets/adapttechnology.jpg";

interface Feature {
  label: string;
  angle: number;
  icon: React.ReactNode;
  image: string;
  description: string;
}

const features: Feature[] = [
  { label: "Outstanding Management", angle: 300, icon: <FaChartPie />, image: outstandingIcon, description: "Manage operations with clarity and insight using our intelligent tools." },
  { label: "Cost Analysis", angle: 340, icon: <FaBalanceScale />, image: costIcon, description: "Deep-dive into your expenses and optimize budgets efficiently." },
  { label: "Cash Flow", angle: 20, icon: <FaMoneyBillWave />, image: cashIcon, description: "Track and forecast cash flow with real-time insights." },
  { label: "Inventory Management", angle: 60, icon: <FaBoxes />, image: inventoryIcon, description: "Streamline inventory levels and avoid stock-outs with precision." },
  { label: "MIS Reports", angle: 100, icon: <FaFileAlt />, image: misIcon, description: "Generate rich reports that illuminate business performance." },
  { label: "Compliance", angle: 140, icon: <FaShieldAlt />, image: complianceIcon, description: "Stay compliant with industry regulations effortlessly." },
  { label: "Adapting Technology", angle: 180, icon: <FaCogs />, image: techIcon, description: "Embrace modern tech to future-proof your operations." },
];

// ... [unchanged imports]
import './FeaturesDiagram.css'; // Ensure this is linked
// ... [same imports as before]

const FeatureCircle = () => {
  const [animationStarted, setAnimationStarted] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 });

  const isSmallScreen = window.innerWidth < 768;
  const centerX = isSmallScreen ? 120 : 220;
  const centerY = isSmallScreen ? 120 : 220;
  const radius = isSmallScreen ? 70 : 120;
  const iconDistance = isSmallScreen ? 100 : 170;
  const svgSize = isSmallScreen ? 240 : 440;

  useEffect(() => {
    if (inView) {
      setAnimationStarted(true);
      const interval = setInterval(() => {
        setSelectedIndex(prev => (prev + 1) % features.length);
      }, 3500);
      return () => clearInterval(interval);
    }
  }, [inView]);

  const selectedFeature = features[selectedIndex];

  return (
    <div ref={ref} className="flex flex-col md:flex-row gap-8 px-2 py-6 items-center justify-center w-full">
      <div className="relative feature-svg-wrapper">
        <svg width={svgSize} height={svgSize}>
          <defs>
            {features.map((_, idx) => (
              <marker key={idx} id={`arrowhead-${idx}`} markerWidth="10" markerHeight="10" refX="6" refY="5" orient="auto">
                <path d="M0,0 L10,5 L0,10 Z" fill="#3b82f6" />
              </marker>
            ))}
          </defs>

          {features.map((feature, idx) => {
            const angleRad = (feature.angle * Math.PI) / 180;
            const x = centerX + radius * Math.cos(angleRad);
            const y = centerY + radius * Math.sin(angleRad);
            const iconX = centerX + iconDistance * Math.cos(angleRad);
            const iconY = centerY + iconDistance * Math.sin(angleRad);
            const isActive = idx === selectedIndex;

            return (
              <React.Fragment key={idx}>
                <line
                  x1={centerX}
                  y1={centerY}
                  x2={x}
                  y2={y}
                  stroke="#3b82f6"
                  strokeWidth="2"
                  markerEnd={`url(#arrowhead-${idx})`}
                  className={`animated-arrow ${animationStarted ? 'animate-draw' : ''}`}
                  style={{
                    animationDelay: `${idx * 0.1}s`,
                    opacity: animationStarted ? 1 : 0
                  }}
                />
                <foreignObject
                  x={iconX - 50}
                  y={iconY - 25}
                  width={100}
                  height={50}
                  style={{
                    opacity: animationStarted ? 1 : 0,
                    transition: `opacity 0.5s ease ${idx * 0.1 + 0.5}s`
                  }}
                >
                  <div className={`feature-label ${isActive ? 'active-icon glow' : ''}`}>
                    <div className="flex flex-col items-center">
                      <div className="text-xl md:text-2xl">{feature.icon}</div>
                      <div className="text-xs text-center mt-1">{feature.label}</div>
                    </div>
                  </div>
                </foreignObject>
              </React.Fragment>
            );
          })}

          <circle cx={centerX} cy={centerY} r={isSmallScreen ? 25 : 35} fill="#1e3a8a" className={`drop-shadow-xl ${animationStarted ? 'scale-100' : 'scale-0'}`}
            style={{ transition: 'transform 0.5s ease', transformOrigin: 'center' }} />
          <text
            x={centerX}
            y={centerY + 5}
            textAnchor="middle"
            fill="#fff"
            fontSize="13"
            fontWeight="bold"
            style={{
              opacity: animationStarted ? 1 : 0,
              transition: 'opacity 0.5s ease 0.5s'
            }}
          >
            Features
          </text>
        </svg>
      </div>

      {selectedFeature && (
        <div className="feature-card animate-fadeInCard">
          <h2 className="feature-title">
            <span className="text-xl">{selectedFeature.icon}</span>
            {selectedFeature.label}
          </h2>
          <img src={selectedFeature.image} alt={selectedFeature.label} className="feature-image" />
          <p className="feature-desc">{selectedFeature.description}</p>
        </div>
      )}
    </div>
  );
};

export default FeatureCircle;
