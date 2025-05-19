import React from "react";

// Title Icon
import best from "../assets/besttally.png";

// Related icons
import outstandingIcon from "../assets/outstanding.webp";
import costIcon from "../assets/cost.jpg";
import cashIcon from "../assets/cashflow.jpeg";
import inventoryIcon from "../assets/inventorymanagement.jpg";
import misIcon from "../assets/misreports.jpg";
import complianceIcon from "../assets/Compliance.jpg";
import techIcon from "../assets/adapttechnology.jpg";

const journeyData = [
  {
    label: (
      <>
        Outstanding<br />Management
      </>
    ),
    color: "bg-blue-800",
    icon: outstandingIcon,
    alt: "Outstanding Management",
  },
  {
    label: (
      <>
        Cost<br />Analysis
      </>
    ),
    color: "bg-orange-700",
    icon: costIcon,
    alt: "Cost Analysis",
  },
  {
    label: (
      <>
        Cash<br />Flow
      </>
    ),
    color: "bg-gray-600",
    icon: cashIcon,
    alt: "Cash Flow",
  },
  {
    label: "Managing Inventory",
    color: "bg-yellow-700",
    icon: inventoryIcon,
    alt: "Managing Inventory",
  },
  {
    label: "MIS Reports",
    color: "bg-green-700",
    icon: misIcon,
    alt: "MIS Reports",
  },
  {
    label: "Compliance",
    color: "bg-blue-900",
    icon: complianceIcon,
    alt: "Compliance",
  },
  {
    label: (
      <>
        Adapting<br />Technology
      </>
    ),
    color: "bg-orange-800",
    icon: techIcon,
    alt: "Adapting Technology",
  },
];

const BusinessJourney: React.FC = () => {
  return (
    <section className="w-full py-14 bg-gradient-to-b from-white to-gray-100">
      <div className="flex flex-col items-center">
        {/* Title Section */}
        <div className="flex flex-col items-center gap-2 mb-10">
          <div className="flex items-center gap-4">
            <img src={best} alt="best-tally" className="h-20 drop-shadow-md" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-wide">
              The Best <span className="text-blue-700">Your Business</span> Can Get
            </h2>
          </div>
          {/* Downward Arrow */}
          <div className="text-3xl text-blue-700 mt-2 animate-bounce">↓</div>
        </div>

        {/* Business Journey Timeline */}
        <div className="relative w-full max-w-7xl overflow-x-auto px-4">
          <div className="border-[6px] border-black rounded-full py-6 px-4 flex justify-between items-center relative bg-white shadow-xl min-w-[900px]">
            {journeyData.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center w-28 mx-2 relative group transition-transform duration-300 hover:scale-110"
              >
                {/* Related Icon - Larger Size */}
                <img
                  src={item.icon}
                  alt={item.alt}
                  className="h-24 w-24 mb-3 rounded-full object-cover shadow-lg"
                />

                {/* Colored Dot */}
                <span
                  className={`w-3 h-3 rounded-full ${item.color} mb-1 shadow-md`}
                ></span>

                {/* Label */}
                <p className="text-[11px] font-medium text-gray-700 group-hover:text-black">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessJourney;
