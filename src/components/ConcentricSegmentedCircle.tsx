// import React from 'react';
// import './ConcentricSegmentedCircle.css';

// const segments = [
//   { id: 1, label: 'Stage 1', color: '#88CCF1' },
//   { id: 2, label: 'Stage 2', color: '#4098D7' },
//   { id: 3, label: 'Stage 3', color: '#235789' },
// ];

// const SegmentLabels = ['01', '02', '03'];
// const startAngles = [0, 120, 240];
// const center = 180;

// const StageCircleDiagram = () => {
//   const ringWidths = [40, 40, 40]; // Inner to outer ring

//   const createArc = (radius, width, startAngle, endAngle, color, label) => {
//     const innerR = radius;
//     const outerR = radius + width;

//     const x1 = center + outerR * Math.cos((startAngle * Math.PI) / 180);
//     const y1 = center + outerR * Math.sin((startAngle * Math.PI) / 180);
//     const x2 = center + outerR * Math.cos((endAngle * Math.PI) / 180);
//     const y2 = center + outerR * Math.sin((endAngle * Math.PI) / 180);

//     const x3 = center + innerR * Math.cos((endAngle * Math.PI) / 180);
//     const y3 = center + innerR * Math.sin((endAngle * Math.PI) / 180);
//     const x4 = center + innerR * Math.cos((startAngle * Math.PI) / 180);
//     const y4 = center + innerR * Math.sin((startAngle * Math.PI) / 180);

//     const largeArc = endAngle - startAngle > 180 ? 1 : 0;

//     const d = `
//       M ${x1},${y1}
//       A ${outerR},${outerR} 0 ${largeArc} 1 ${x2},${y2}
//       L ${x3},${y3}
//       A ${innerR},${innerR} 0 ${largeArc} 0 ${x4},${y4}
//       Z
//     `;

//     const labelAngle = (startAngle + endAngle) / 2;
//     const labelRadius = innerR + width / 2;
//     const lx = center + labelRadius * Math.cos((labelAngle * Math.PI) / 180);
//     const ly = center + labelRadius * Math.sin((labelAngle * Math.PI) / 180);

//     return (
//       <g key={label + radius}>
//         <path d={d} fill={color} opacity="0.9" stroke="#fff" strokeWidth="1" />
//         <text x={lx} y={ly} textAnchor="middle" fontSize="10" fill="#fff">{label}</text>
//       </g>
//     );
//   };

//   return (
//     <div className="circle-container">
//       <svg width="360" height="360">
//         <circle cx={center} cy={center} r="30" fill="#eeeeee" />
//         <text x={center} y={center} textAnchor="middle" dy=".3em" fontWeight="bold">
//           Center
//         </text>

//         {startAngles.map((start, i) => {
//           const end = start + 120;
//           let radius = 40;

//           return segments.map((seg, j) => {
//             const arc = createArc(radius, ringWidths[j], start, end, seg.color, seg.label);
//             radius += ringWidths[j];
//             return arc;
//           });
//         })}

//         {startAngles.map((angle, i) => {
//           const labelRadius = 180;
//           const x = center + labelRadius * Math.cos(((angle + 60) * Math.PI) / 180);
//           const y = center + labelRadius * Math.sin(((angle + 60) * Math.PI) / 180);
//           return (
//             <g key={`label-${i}`}>
//               <circle cx={x} cy={y} r="12" fill="#fff" stroke="#000" />
//               <text x={x} y={y + 4} textAnchor="middle" fontWeight="bold" fontSize="10">
//                 {SegmentLabels[i]}
//               </text>
//             </g>
//           );
//         })}
//       </svg>
//     </div>
//   );
// };

// export default StageCircleDiagram;
import React from 'react';
import './ConcentricSegmentedCircle.css';

const segments = [
  { id: 1, label: 'Stage 1', color: '#88CCF1' },
  { id: 2, label: 'Stage 2', color: '#4098D7' },
  { id: 3, label: 'Stage 3', color: '#235789' },
];

const SegmentLabels = ['01', '02', '03'];
const startAngles = [0, 120, 240];
const center = 250;

const StageCircleDiagram = () => {
  const ringWidths = [40, 40, 40]; // Inner to outer ring

  const createArc = (radius, width, startAngle, endAngle, color, label) => {
    const innerR = radius;
    const outerR = radius + width;

    const x1 = center + outerR * Math.cos((startAngle * Math.PI) / 180);
    const y1 = center + outerR * Math.sin((startAngle * Math.PI) / 180);
    const x2 = center + outerR * Math.cos((endAngle * Math.PI) / 180);
    const y2 = center + outerR * Math.sin((endAngle * Math.PI) / 180);

    const x3 = center + innerR * Math.cos((endAngle * Math.PI) / 180);
    const y3 = center + innerR * Math.sin((endAngle * Math.PI) / 180);
    const x4 = center + innerR * Math.cos((startAngle * Math.PI) / 180);
    const y4 = center + innerR * Math.sin((startAngle * Math.PI) / 180);

    const largeArc = endAngle - startAngle > 180 ? 1 : 0;

    const d = `
      M ${x1},${y1}
      A ${outerR},${outerR} 0 ${largeArc} 1 ${x2},${y2}
      L ${x3},${y3}
      A ${innerR},${innerR} 0 ${largeArc} 0 ${x4},${y4}
      Z
    `;

    const labelAngle = (startAngle + endAngle) / 2;
    const labelRadius = innerR + width / 2;
    const lx = center + labelRadius * Math.cos((labelAngle * Math.PI) / 180);
    const ly = center + labelRadius * Math.sin((labelAngle * Math.PI) / 180);

    return (
      <g key={label + radius}>
        <path d={d} fill={color} opacity="0.9" stroke="#fff" strokeWidth="1" />
        <text x={lx} y={ly} textAnchor="middle" fontSize="12" fill="#fff">{label}</text>
      </g>
    );
  };

  return (
    <div className="circle-container">
      <svg width="500" height="500">
        <circle cx={center} cy={center} r="30" fill="#eeeeee" />
        <text x={center} y={center} textAnchor="middle" dy=".3em" fontWeight="bold" fontSize="14">
          Center
        </text>

        {startAngles.map((start, i) => {
          const end = start + 120;
          let radius = 40;

          return segments.map((seg, j) => {
            const arc = createArc(radius, ringWidths[j], start, end, seg.color, seg.label);
            radius += ringWidths[j];
            return arc;
          });
        })}

        {startAngles.map((angle, i) => {
          const labelRadius = 200;
          const x = center + labelRadius * Math.cos(((angle + 60) * Math.PI) / 180);
          const y = center + labelRadius * Math.sin(((angle + 60) * Math.PI) / 180);
          return (
            <g key={`label-${i}`}>
              <circle cx={x} cy={y} r="12" fill="#fff" stroke="#000" />
              <text x={x} y={y + 4} textAnchor="middle" fontWeight="bold" fontSize="12">
                {SegmentLabels[i]}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default StageCircleDiagram;
