
// import React from 'react';
// import { Button } from "@/components/ui/button";
// import { ChartBar, Shield, ArrowRight } from "lucide-react";
// import { Link } from "react-router-dom";

// const HeroSection = () => {
//   return (
//     <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-primary to-primary-light text-white overflow-hidden">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row items-center">
//           <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
//               Streamline Your Business Operations
//             </h1>
//             <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-lg">
//               The complete business management solution that simplifies accounting, inventory, GST compliance, and more.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4">
//             <a href="#webinar">
//   <Button size="lg" className="bg-secondary hover:bg-secondary-light text-white font-medium group transition-all duration-300 transform hover:scale-105 pulse-button">
//     Go for Free Webinar
//     <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//   </Button>
// </a>

//               <Link to="/start-free-trail">
//                 <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white group transition-all duration-300">
//                   Go For Free Trial
//                   <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                 </Button>
//               </Link>
//             </div>
//             <div className="flex items-center mt-8 space-x-6">
//               <div className="flex items-center animate-fade-in delay-100">
//                 <Shield className="h-5 w-5 mr-2 text-secondary" />
//                 <span className="text-sm">GST Compliant</span>
//               </div>
//               <div className="flex items-center animate-fade-in delay-200">
//                 <ChartBar className="h-5 w-5 mr-2 text-secondary" />
//                 <span className="text-sm">Real-time Reports</span>
//               </div>
//             </div>
//           </div>
          
//           {/* <div className="md:w-1/2 relative animate-slide-up opacity-0" style={{ animationDelay: '0.3s' }}>
//             <div className="relative">
//               <div className="absolute inset-0 bg-gradient-to-tr from-secondary/30 to-transparent rounded-lg transform rotate-6"></div>
//               <div className="relative bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200 hover-lift">
//                 <div className="bg-gray-800 h-8 flex items-center px-4">
//                   <div className="flex space-x-2">
//                     <div className="h-3 w-3 rounded-full bg-red-500"></div>
//                     <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
//                     <div className="h-3 w-3 rounded-full bg-green-500"></div>
//                   </div>
//                 </div>
//                 <div className="p-4">
//                   <div className="flex justify-between mb-6">
//                     <div>
//                       <div className="h-4 bg-gray-200 rounded w-32"></div>
//                       <div className="h-8 bg-primary/10 rounded mt-2 w-48"></div>
//                     </div>
//                     <div className="h-12 w-24 bg-secondary/20 rounded"></div>
//                   </div>
//                   <div className="space-y-4">
//                     <div className="h-4 bg-gray-200 rounded w-full"></div>
//                     <div className="h-4 bg-gray-200 rounded w-5/6"></div>
//                     <div className="h-4 bg-gray-200 rounded w-4/6"></div>
//                   </div>
//                   <div className="mt-6 grid grid-cols-2 gap-4">
//                     <div className="h-16 bg-gray-100 rounded p-3">
//                       <div className="h-3 bg-gray-200 rounded w-16 mb-2"></div>
//                       <div className="h-4 bg-primary/10 rounded w-12"></div>
//                     </div>
//                     <div className="h-16 bg-gray-100 rounded p-3">
//                       <div className="h-3 bg-gray-200 rounded w-16 mb-2"></div>
//                       <div className="h-4 bg-secondary/20 rounded w-12"></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div> */}
//           <div className="md:w-1/2 relative animate-slide-up opacity-0 transition-all duration-500 ease-out" style={{ animationDelay: '0.3s' }}>
//   <div className="relative">
//     <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-lg transform rotate-3"></div>
//     <div className="relative bg-white rounded-xl shadow-3xl overflow-hidden border border-gray-200 hover:shadow-2xl hover:scale-105 transform transition-all duration-400 ease-in-out">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-indigo-800 via-indigo-900 to-indigo-950 h-12 flex items-center justify-between px-6 text-white rounded-t-xl">
//         <div className="flex space-x-2">
//           <div className="h-3 w-3 rounded-full bg-red-500"></div>
//           <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
//           <div className="h-3 w-3 rounded-full bg-green-500"></div>
//         </div>
//         <span className="text-sm font-semibold">Tally Business Suite</span>
//       </div>

//       {/* Main Content */}
//       <div className="p-6 text-gray-800">
//         {/* Header Text */}
//         <div className="flex justify-between items-start mb-6">
//           <div>
//             <h3 className="text-lg font-bold text-indigo-900 mb-1">Business Software Solutions</h3>
//             <p className="text-sm text-gray-600">Powering efficient, simplified business management</p>
//           </div>
//           <div className="px-3 py-1 bg-gradient-to-t from-secondary/20 to-secondary/40 rounded-xl text-sm text-indigo-900 font-semibold shadow">
//             Trusted by 2M+ Users
//           </div>
//         </div>

//         {/* Feature Highlights */}
//         <ul className="space-y-4 text-sm">
//           <li className="flex items-start space-x-2">
//             <span className="text-indigo-700 font-medium">✓</span>
//             <span><strong>Simplified Accounting</strong> – Handle bookkeeping, invoicing, and GST with ease.</span>
//           </li>
//           <li className="flex items-start space-x-2">
//             <span className="text-indigo-700 font-medium">✓</span>
//             <span><strong>Inventory Management</strong> – Monitor stock movement and optimize resources efficiently.</span>
//           </li>
//           <li className="flex items-start space-x-2">
//             <span className="text-indigo-700 font-medium">✓</span>
//             <span><strong>Business Reports</strong> – Get real-time insights to make informed decisions.</span>
//           </li>
//         </ul>

//         {/* Feature Boxes */}
//         <div className="mt-6 grid grid-cols-2 gap-6 text-sm">
//           <div className="bg-gradient-to-br from-gray-100 to-gray-300 rounded-xl p-4 shadow-md hover:shadow-lg transition">
//             <h4 className="text-indigo-800 font-semibold mb-1">Accounting</h4>
//             <p className="text-gray-700">GST, payroll, and compliance made easy.</p>
//           </div>
//           <div className="bg-gradient-to-br from-gray-100 to-gray-300 rounded-xl p-4 shadow-md hover:shadow-lg transition">
//             <h4 className="text-indigo-800 font-semibold mb-1">Inventory</h4>
//             <p className="text-gray-700">Real-time tracking and smart stock control.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>




//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

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
// import React, { useState, useRef } from 'react';
// import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";
// import { Link } from "react-router-dom";
// import './HeroSection.css';

// const HeroSection = () => {
//   const formRef = useRef(null);
//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const [shakeForm, setShakeForm] = useState(false);
//   const [formData, setFormData] = useState({
//     role: '',
//     name: '',
//     phone: '',
//     email: '',
//     pincode: '',
//     consent: false,
//   });

//   const handleFormShake = () => {
//     setShakeForm(true);
//     setTimeout(() => {
//       setShakeForm(false);
//     }, 500);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleCheckboxChange = (e) => {
//     setFormData({
//       ...formData,
//       consent: e.target.checked,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (formData.role && formData.name && formData.phone && formData.email && formData.pincode && formData.consent) {
//       try {
//         const response = await fetch('http://localhost:5000/submit-form', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(formData),
//         });

//         if (response.ok) {
//           setFormSubmitted(true);
//         } else {
//           alert('Error submitting form. Please try again.');
//         }
//       } catch (error) {
//         console.error('Error submitting form:', error);
//         alert('Error submitting form. Please try again.');
//       }
//     } else {
//       handleFormShake();
//     }
//   };

//   return (
//     <section className="pt-20 pb-16 bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] text-white overflow-hidden">
//       <div className="container mx-auto px-4 max-w-6xl">
//         <div className="flex flex-col-reverse md:flex-row items-center gap-10">

//           {/* Left */}
//           <div className="md:w-1/2 text-center md:text-left">
//             <h1 className="text-3xl md:text-4xl font-bold leading-snug mb-3">
//               What is Business?
//             </h1>
//             <p className="text-base text-slate-300 mb-5">
//               Yes, business is about buying and selling — but the real challenge begins after the sale.
//             </p>

//             <ul className="text-sm md:text-base space-y-2 mb-5">
//               {[
//                 "collecting payments on time?",
//                 "suppliers being paid properly?",
//                 "managing your stock efficiently?",
//                 "filing your GST returns accurately?",
//                 "effectively tracking your sales team's performance?",
//                 "reconciling your bank book with actual transactions?"
//               ].map((item, idx) => (
//                 <li key={idx} className="flex items-start gap-2">
//                   <span className="text-green-400">✅</span>
//                   <span className="text-white">
//                     {item === "suppliers being paid properly?"
//                       ? <>Are your <span className="font-medium underline">{item}</span></>
//                       : <>Are you <span className="font-medium underline">{item}</span></>
//                     }
//                   </span>
//                 </li>
//               ))}
//             </ul>

//             <p className="text-slate-200 text-sm md:text-base leading-relaxed mb-6">
//               <span className="text-white text-base font-semibold block mb-1">🤔 Still unsure?</span>
//               If these questions make you pause, it's <span className="font-semibold text-white underline decoration-wavy">time to level up</span>.
//               <br />
//               <span className="mt-2 inline-block bg-gradient-to-r from-yellow-300 via-pink-500 to-red-500 text-transparent bg-clip-text font-bold text-base">
//                 💡 Don’t worry — there's a Solution Trusted by 2.5M+ businesses!
//               </span>
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start overflow-hidden">
//               {!formSubmitted && (
//                 <button onClick={handleFormShake}>
//                   <Button className="group relative overflow-hidden border-2 border-transparent bg-white text-blue-700 font-semibold px-6 py-3 rounded-2xl shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:text-white hover:bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 ml-10">
//                     <span className="absolute inset-0 z-0 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 opacity-10 blur-md group-hover:opacity-30 transition-opacity duration-500 rounded-2xl"></span>
//                     <span className=" flex items-center gap-2 overflow-hidden">
//                       <ArrowRight className="h-5 w-5" />
//                       Register For Free Webinar
//                     </span>
//                   </Button>
//                 </button>
//               )}
//             </div>
//           </div>

//           {/* Right - Form */}
//           <div className="md:w-1/2" ref={formRef} id="formSection">
//             <div className={`bg-white rounded-xl p-6 shadow-lg w-full max-w-md mx-auto text-gray-800 ${shakeForm ? 'shake-form' : ''}`}>
//               {!formSubmitted ? (
//                 <>
//                   <h2 className="text-xl font-bold text-center mb-1 text-blue-700">
//                     🚀 Take the First Step Toward Smarter Business Growth
//                   </h2>
//                   <p className="text-xs text-center text-gray-500 mb-4">
//                     No credit card required. Instant access.
//                   </p>
//                   <form onSubmit={handleSubmit} className="space-y-3 text-sm">
                    
//                     <select
//                       required
//                       name="role"
//                       value={formData.role}
//                       onChange={handleInputChange}
//                       className="block w-full px-3 py-2 rounded border border-gray-300 appearance-none"
//                     >
//                       <option value="" disabled>I am *</option>
//                       <option value="business">Business Owner</option>
//                       <option value="accountant">Accountant</option>
//                       <option value="student">Student</option>
//                       <option value="others">Others</option>
//                     </select>

//                     <input
//                       type="text"
//                       required
//                       name="name"
//                       placeholder="Name *"
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       className="block w-full px-3 py-2 rounded border border-gray-300"
//                     />
//                     <input
//                       type="tel"
//                       required
//                       name="phone"
//                       placeholder="Phone *"
//                       value={formData.phone}
//                       onChange={handleInputChange}
//                       className="block w-full px-3 py-2 rounded border border-gray-300"
//                     />
//                     <input
//                       type="email"
//                       required
//                       name="email"
//                       placeholder="Email *"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       className="block w-full px-3 py-2 rounded border border-gray-300"
//                     />
//                     <input
//                       type="text"
//                       required
//                       name="pincode"
//                       placeholder="Pincode *"
//                       value={formData.pincode}
//                       onChange={handleInputChange}
//                       className="block w-full px-3 py-2 rounded border border-gray-300"
//                     />
//                     <label className="flex items-start text-xs text-gray-600 space-x-2">
//                       <input
//                         type="checkbox"
//                         required
//                         className="mt-1 accent-blue-600"
//                         checked={formData.consent}
//                         onChange={handleCheckboxChange}
//                       />
//                       <span>I agree to receive updates, offers & helpful insights on growing my business smarter.</span>
//                     </label>
//                     <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">Register</button>
//                   </form>
//                 </>
//               ) : (
//                 <div className="text-center py-10 text-gray-700">
//                   <h2 className="text-lg font-bold text-green-600 mb-2">✅ You're All Set!</h2>
//                   <p className="mb-3">Your account is now active and ready to use.</p>
//                   <div className="bg-blue-100 text-blue-800 px-3 py-2 rounded text-sm mb-3">
//                     Check your inbox for login details.
//                   </div>
//                   <p className="text-xs">Need help? Visit our <a href="/help-docs" className="text-blue-600 underline">Help Center</a>.</p>
//                 </div>
//               )}
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React, { useState, useRef,useEffect} from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import './HeroSection.css';
import baseURL from '@/Api';

const HeroSection = () => {
  const formRef = useRef(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [shakeForm, setShakeForm] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState('');
  const [loading, setLoading] = useState(false); // <- NEW
  const [formData, setFormData] = useState({
    role: '',
    businessType: '',
    name: '',
    phone: '',
    email: '',
    pincode: '',
  });
  const [message, setMessage] = useState('');

   // Fetch the latest webinar's WhatsApp link
  // Fetch the latest webinar's WhatsApp link
  useEffect(() => {
    const fetchLatestWebinar = async () => {
      try {
        const response = await fetch(`${baseURL}/webinars`);
        const webinars = await response.json();
        
        if (webinars.length > 0) {
          // Sort by date to get the most recent webinar
          const sortedWebinars = [...webinars].sort((a, b) => {
            const dateA = new Date(`${a.date} ${a.time}`).getTime();
            const dateB = new Date(`${b.date} ${b.time}`).getTime();
            return dateB - dateA;
          });
          
          // Set the WhatsApp link from the most recent webinar
          if (sortedWebinars[0].whatsapp_link) {
            setWhatsappLink(sortedWebinars[0].whatsapp_link);
          }
        }
      } catch (error) {
        console.error('Error fetching webinars:', error);
      }
    };

    fetchLatestWebinar();
  }, []);

  const handleFormShake = () => {
    setShakeForm(true);
    setTimeout(() => {
      setShakeForm(false);
    }, 500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  
// const handleSubmit = async (e) => {
//   e.preventDefault();
//   const { role, name, phone, email, pincode } = formData;

//   if (role && name && phone && email && pincode) {
//     setLoading(true); // Start loading
//     try {
//       // Step 1: Fetch webinars
//       const webinarRes = await fetch(`${baseURL}/webinars`);
//       const webinars = await webinarRes.json();

//       // Step 2: Get the highest webinar ID
//       const maxWebinar = webinars.reduce((max, webinar) => {
//         return webinar.id > max.id ? webinar : max;
//       }, webinars[0]);

//       const updatedFormData = {
//         ...formData,
//         webinar_id: maxWebinar?.webinar_id || null, // Step 3: Add webinar_id
//       };

//       // Step 4: Submit form
//       const response = await fetch(`${baseURL}/submit-form`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(updatedFormData),
//       });

//       if (response.ok) {
//         setFormSubmitted(true);
//         setMessage('✅ Registration Successful! You will receive an email shortly.');
//       } else {
//         setMessage('❌ Error submitting form. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       setMessage('❌ Error submitting form. Please try again.');
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   } else {
//     handleFormShake();
//     setMessage('❌ Please fill all required fields.');
//   }
// };

const handleSubmit = async (e) => {
  e.preventDefault();
  const { role, name, phone, email, pincode } = formData;

  if (role && name && phone && email && pincode) {
    setLoading(true);
    try {
      const webinarRes = await fetch(`${baseURL}/webinars`);
      const webinars = await webinarRes.json();

      const maxWebinar = webinars.reduce((max, webinar) => {
        return webinar.id > max.id ? webinar : max;
      }, webinars[0]);

      const updatedFormData = {
        ...formData,
        webinar_id: maxWebinar?.webinar_id || null,
      };

      const response = await fetch(`${baseURL}/submit-form`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFormData),
      });

      if (response.ok) {
        setFormSubmitted(true); // ✅ Make sure this stays true
        setMessage('✅ Registration Successful! You will receive an email shortly.');
      } else {
        setMessage('❌ Error submitting form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage('❌ Error submitting form. Please try again.');
    } finally {
      setLoading(false);
    }
  } else {
    handleFormShake();
    setMessage('❌ Please fill all required fields.');
  }
};

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] text-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">

          {/* Left */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold leading-snug mb-3">
              What is Business?
            </h1>
            <p className="text-base text-slate-300 mb-5">
              Yes, business is about buying and selling — but the real challenge begins after the sale.
            </p>

            <ul className="text-sm md:text-base space-y-3 mb-5">
              {[
                "collecting payments on time?",
                "suppliers being paid properly?",
                "managing your stock efficiently?",
                "filing your GST returns accurately?",
                "effectively tracking your sales team's performance?",
                "reconciling your bank book with actual transactions?",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 flex-wrap">
                  <span className="text-green-400">✅</span>
                  <span className="text-white">
                    {item === "suppliers being paid properly?"
                      ? (
                        <>Are your <span className="font-medium underline">{item}</span></>
                      )
                      : (
                        <>Are you <span className="font-medium underline">{item}</span></>
                      )}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-slate-200 text-sm md:text-base leading-relaxed mb-6">
              <span className="text-white text-base font-semibold block mb-1">🤔 Still unsure?</span>
              If these questions make you pause, it's <span className="font-semibold text-white underline decoration-wavy">time to level up</span>.
              <br />
              <span className="mt-2 inline-block bg-gradient-to-r from-yellow-300 via-pink-500 to-red-500 text-transparent bg-clip-text font-bold text-base">
                💡 Don’t worry — there's a Solution Trusted by 2.5M+ businesses!
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start overflow-hidden">
              {!formSubmitted && (
                <button onClick={handleFormShake}>
                  <Button className="group relative overflow-hidden border-2 border-transparent bg-white text-blue-700 font-semibold px-6 py-3 rounded-2xl shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:text-white hover:bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 ml-10">
                    <span className="absolute inset-0 z-0 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 opacity-10 blur-md group-hover:opacity-30 transition-opacity duration-500 rounded-2xl"></span>
                    <span className=" flex items-center gap-2 overflow-hidden">
                      <ArrowRight className="h-5 w-5" />
                      Register For Free Webinar
                    </span>
                  </Button>
                </button>
              )}
            </div>
          </div>

          {/* Right - Form */}
          <div className="md:w-1/2" ref={formRef} id="formSection">
            <div className={`bg-white rounded-xl p-6 shadow-lg w-full max-w-md mx-auto text-gray-800 ${shakeForm ? 'shake-form' : ''}`}>
              {!formSubmitted ? (
                <>
                  <h2 className="text-xl font-bold text-center mb-1 text-blue-700">
                    🚀 Take the First Step Toward Smarter Business Growth
                  </h2>
                  <p className="text-xs text-center text-gray-500 mb-4">
                    No credit card required. Instant access.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-3 text-sm">
                    <select required name="role" value={formData.role} onChange={handleInputChange} className="block w-full px-3 py-2 rounded border border-gray-300">
                      <option value="" disabled>I am *</option>
                      <option value="businessOwner">Business Owner</option>
                      <option value="accountant">Accountant</option>
                      <option value="student">Student</option>
                      <option value="others">Others</option>
                    </select>

                    <select required name="businessType" value={formData.businessType} onChange={handleInputChange} className="block w-full px-3 py-2 rounded border border-gray-300">
                      <option value="" disabled>Business Type *</option>
                      <option value="retail">Retail</option>
                      <option value="wholesale">Wholesale</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="service">Service-Based</option>
                      <option value="distribution">Distribution</option>
                      <option value="freelance">Freelancer/Sole Proprietor</option>
                      <option value="education">Education/Training</option>
                      <option value="others">Others</option>
                    </select>

                    <input type="text" required name="name" placeholder="Name *" value={formData.name} onChange={handleInputChange} className="block w-full px-3 py-2 rounded border border-gray-300" />
                    <input type="tel" required name="phone" placeholder="Phone *" value={formData.phone} onChange={handleInputChange} className="block w-full px-3 py-2 rounded border border-gray-300" />
                    <input type="email" required name="email" placeholder="Email *" value={formData.email} onChange={handleInputChange} className="block w-full px-3 py-2 rounded border border-gray-300" />
                    <input type="text" required name="pincode" placeholder="Pincode *" value={formData.pincode} onChange={handleInputChange} className="block w-full px-3 py-2 rounded border border-gray-300" />

                    <button
                      type="submit"
                      disabled={loading}
                      className={`w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg flex items-center justify-center gap-2 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"></path>
                          </svg>
                          Registering...
                        </>
                      ) : (
                        "Register"
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="flex justify-center items-center py-8 px-3 bg-gradient-to-r from-blue-50 to-blue-100">
                  <div className="max-w-sm w-full bg-white shadow-md rounded-md p-5 text-center">
                    <h2 className="text-lg font-bold text-green-600 mb-3">✅ Registration Successful!</h2>
                    <p className="text-sm text-gray-700 mb-4">You've successfully registered for the webinar.</p>
                    <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-md text-xs mb-4 shadow-sm">
                      Webinar details have been sent to your email.
                    </div>
                    <p className="text-xs text-gray-600">
                      Didn't receive the email? Check your spam folder.
                    </p>
                      {/* WhatsApp Group Link */}
    <p className="text-xs text-gray-700 mt-4 mb-1">
  📢 Stay connected!
</p>
 {whatsappLink && (
              <>
                <p className="text-xs text-gray-700 mt-4 mb-1">
                  📢 Stay connected!
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium shadow-sm hover:bg-green-200 transition"
                >
                  <span className="inline-block animate-shake">👉</span>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                    className="inline-block w-4 h-4 ml-1 mr-2 align-text-bottom"
                  />
                  📱 Join our WhatsApp Group for updates and resources!
                </a>
              </>
            )}



                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;



