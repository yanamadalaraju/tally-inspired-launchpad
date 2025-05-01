
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChartBar, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-primary to-primary-light text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Streamline Your Business Operations
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-lg">
              The complete business management solution that simplifies accounting, inventory, GST compliance, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
            <a href="#webinar">
  <Button size="lg" className="bg-secondary hover:bg-secondary-light text-white font-medium group transition-all duration-300 transform hover:scale-105 pulse-button">
    Register for Free Webinar
    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
  </Button>
</a>

              <Link to="/start-free-trail">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white group transition-all duration-300">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="flex items-center mt-8 space-x-6">
              <div className="flex items-center animate-fade-in delay-100">
                <Shield className="h-5 w-5 mr-2 text-secondary" />
                <span className="text-sm">GST Compliant</span>
              </div>
              <div className="flex items-center animate-fade-in delay-200">
                <ChartBar className="h-5 w-5 mr-2 text-secondary" />
                <span className="text-sm">Real-time Reports</span>
              </div>
            </div>
          </div>
          
          {/* <div className="md:w-1/2 relative animate-slide-up opacity-0" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/30 to-transparent rounded-lg transform rotate-6"></div>
              <div className="relative bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200 hover-lift">
                <div className="bg-gray-800 h-8 flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between mb-6">
                    <div>
                      <div className="h-4 bg-gray-200 rounded w-32"></div>
                      <div className="h-8 bg-primary/10 rounded mt-2 w-48"></div>
                    </div>
                    <div className="h-12 w-24 bg-secondary/20 rounded"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="h-16 bg-gray-100 rounded p-3">
                      <div className="h-3 bg-gray-200 rounded w-16 mb-2"></div>
                      <div className="h-4 bg-primary/10 rounded w-12"></div>
                    </div>
                    <div className="h-16 bg-gray-100 rounded p-3">
                      <div className="h-3 bg-gray-200 rounded w-16 mb-2"></div>
                      <div className="h-4 bg-secondary/20 rounded w-12"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="md:w-1/2 relative animate-slide-up opacity-0 transition-all duration-500 ease-out" style={{ animationDelay: '0.3s' }}>
  <div className="relative">
    <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-lg transform rotate-3"></div>
    <div className="relative bg-white rounded-xl shadow-3xl overflow-hidden border border-gray-200 hover:shadow-2xl hover:scale-105 transform transition-all duration-400 ease-in-out">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-800 via-indigo-900 to-indigo-950 h-12 flex items-center justify-between px-6 text-white rounded-t-xl">
        <div className="flex space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-sm font-semibold">Tally Business Suite</span>
      </div>

      {/* Main Content */}
      <div className="p-6 text-gray-800">
        {/* Header Text */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-lg font-bold text-indigo-900 mb-1">Tally Business Solutions</h3>
            <p className="text-sm text-gray-600">Powering efficient, simplified business management</p>
          </div>
          <div className="px-3 py-1 bg-gradient-to-t from-secondary/20 to-secondary/40 rounded-xl text-sm text-indigo-900 font-semibold shadow">
            Trusted by 2M+ Users
          </div>
        </div>

        {/* Feature Highlights */}
        <ul className="space-y-4 text-sm">
          <li className="flex items-start space-x-2">
            <span className="text-indigo-700 font-medium">✓</span>
            <span><strong>Simplified Accounting</strong> – Handle bookkeeping, invoicing, and GST with ease.</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-indigo-700 font-medium">✓</span>
            <span><strong>Inventory Management</strong> – Monitor stock movement and optimize resources efficiently.</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-indigo-700 font-medium">✓</span>
            <span><strong>Business Reports</strong> – Get real-time insights to make informed decisions.</span>
          </li>
        </ul>

        {/* Feature Boxes */}
        <div className="mt-6 grid grid-cols-2 gap-6 text-sm">
          <div className="bg-gradient-to-br from-gray-100 to-gray-300 rounded-xl p-4 shadow-md hover:shadow-lg transition">
            <h4 className="text-indigo-800 font-semibold mb-1">Accounting</h4>
            <p className="text-gray-700">GST, payroll, and compliance made easy.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-100 to-gray-300 rounded-xl p-4 shadow-md hover:shadow-lg transition">
            <h4 className="text-indigo-800 font-semibold mb-1">Inventory</h4>
            <p className="text-gray-700">Real-time tracking and smart stock control.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>




        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// import React from 'react';
// import { Button } from "@/components/ui/button";
// import { ChartBar, Shield, ArrowRight } from "lucide-react";
// import { Link } from "react-router-dom";

// const HeroSection = () => {
//   return (
//     <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#3B82F6] text-white overflow-hidden">
//       {/* Animated background overlay */}
//       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md z-0 animate-pulse rounded-xl"></div>

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="flex flex-col md:flex-row items-center">
          
//           {/* Left Text Section */}
//           <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight drop-shadow-lg">
//               Streamline Your <span className="text-yellow-300">Business Operations</span>
//             </h1>
//             <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-lg leading-relaxed">
//               Simplify accounting, manage inventory, ensure GST compliance, and unlock powerful reports—all in one place.
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4">
//               <Link to="#webinar">
//                 <Button
//                   size="lg"
//                   className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full px-6 py-3 transition-all transform hover:scale-105 shadow-md"
//                 >
//                   Register for Free Webinar
//                   <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                 </Button>
//               </Link>
//               <Link to="/combined">
//                 <Button
//                   size="lg"
//                   variant="outline"
//                   className="bg-white/10 hover:bg-white/20 text-white border-white font-medium rounded-full px-6 py-3 transition-all transform hover:scale-105"
//                 >
//                   Start Free Trial
//                   <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                 </Button>
//               </Link>
//             </div>

//             {/* Feature Highlights */}
//             <div className="flex items-center mt-8 space-x-6 text-sm">
//               <div className="flex items-center animate-fade-in delay-100">
//                 <Shield className="h-5 w-5 mr-2 text-yellow-300" />
//                 GST Compliant
//               </div>
//               <div className="flex items-center animate-fade-in delay-200">
//                 <ChartBar className="h-5 w-5 mr-2 text-yellow-300" />
//                 Real-time Reports
//               </div>
//             </div>
//           </div>

//           {/* Right Animated Card or Illustration */}
//           <div className="md:w-1/2 relative animate-zoom-in">
//             <div className="relative bg-white bg-opacity-10 border border-white/20 rounded-2xl shadow-2xl p-6 backdrop-blur-lg">
//               <img
//                 src="https://static.vecteezy.com/system/resources/previews/007/943/528/non_2x/business-marketing-strategy-target-management-illustration-free-vector.jpg" // replace with your own image
//                 alt="Dashboard Preview"
//                 className="rounded-xl shadow-lg"
//               />
//               <div className="mt-4 text-center text-sm text-gray-100">Interactive Business Dashboard</div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
