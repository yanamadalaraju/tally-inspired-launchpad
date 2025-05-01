import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ShieldCheck,
  PieChart,
  Database,
  ChevronDown,
  Lock
} from "lucide-react";
import "./styles.css";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';




const StartFreeTrial: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const [shake, setShake] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false); // Track form submission state
  
  
  const scrollToForm = () => {
    setShowForm(true);
    setTimeout(() => {
      const formSection = formRef.current;
  
      // Use the fixed navbar height (40px)
      const navbarHeight = 130;
  
      // Scroll to the form with an offset to account for the navbar
      window.scrollTo({
        top: formSection.offsetTop - navbarHeight, // subtract navbar height
        behavior: 'smooth',
      });
    }, 100);
  };
  

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setFormSubmitted(true); // Set formSubmitted to true after the form is submitted
  };
  const handleGetStarted = () => {
    setShowForm(true);

    if (formRef.current) {
      formRef.current.classList.add("shake");
      setTimeout(() => {
        formRef.current?.classList.remove("shake");
      }, 400); // same as shake animation duration
    }
  };

  // const handleSubmited = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // form logic here
  // };
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Add Navbar at the top */}
      <Navbar />
      <section className="min-h-screen bg-[#0B2C4D] text-white py-20 px-6 mt-[30px]">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1AC8A6]">
            Transform Your Business with TallyPrime
          </h1>
          <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
            Join over 2 million businesses using India's most trusted business software. Start your risk-free 7-day trial today!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <Button
              size="lg"
              onClick={scrollToForm}
              className="bg-[#1AC8A6] hover:bg-[#17b09a] text-[#0B2C4D] font-bold py-6 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-[#1AC8A6] text-[#1AC8A6] hover:bg-[#e6f7f4] font-medium py-6 px-8 rounded-full shadow-sm"
            >
              Watch Demo
            </Button>
          </div>
          <div className="mt-6 animate-bounce">
            <ChevronDown className="h-8 w-8 text-[#1AC8A6] mx-auto cursor-pointer" onClick={scrollToForm} />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
  <div className="bg-[#EDF1F7] text-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-[#1AC8A6]">
    <PieChart className="h-10 w-10 text-[#1AC8A6] mb-4" />
    <h3 className="text-xl font-bold mb-3">Complete Accounting</h3>
    <p>Manage all your financial operations from invoicing to balance sheets in one place.</p>
  </div>
  <div className="bg-[#EDF1F7] text-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-[#1AC8A6]">
    <Database className="h-10 w-10 text-[#1AC8A6] mb-4" />
    <h3 className="text-xl font-bold mb-3">Smart Inventory</h3>
    <p>Real-time stock tracking with batch-wise and expiry management.</p>
  </div>
  <div className="bg-[#EDF1F7] text-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-[#1AC8A6]">
    <ShieldCheck className="h-10 w-10 text-[#1AC8A6] mb-4" />
    <h3 className="text-xl font-bold mb-3">GST Compliance</h3>
    <p>Automated GST filing, e-invoicing, and e-way bills with 100% accuracy.</p>
  </div>
</div>


        {/* Testimonials */}
        <div className="bg-[#EDF1F7] rounded-3xl p-6 mb-12 text-gray-800">
  <h2 className="text-2xl font-bold text-center mb-6 text-[#0B2C4D]">
    Trusted by Businesses Across India
  </h2>
  <div className="grid md:grid-cols-3 gap-6">
    {[
      {
        quote: "TallyPrime reduced our accounting time by 70% and eliminated errors in GST filing.",
        author: "Rajesh Mehta, Retail Chain Owner"
      },
      {
        quote: "The inventory features helped us reduce stockouts and improve cash flow immediately.",
        author: "Priya Singh, Manufacturing Business"
      },
      {
        quote: "We switched from 3 different tools to just TallyPrime - it does everything we need.",
        author: "Arun Kumar, Trading Company"
      }
    ].map((testimonial, index) => (
      <div key={index} className="bg-white p-4 rounded-xl shadow">
        <div className="text-yellow-400 mb-2">★★★★★</div>
        <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
        <p className="text-sm font-semibold text-[#0B2C4D]">— {testimonial.author}</p>
      </div>
    ))}
  </div>
</div>


        {/* Free Trial Form */}
        <section className="w-full min-h-[80vh] bg-gradient-to-br from-blue-200 to-white px-6 py-10">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-8">
    
    {/* LEFT: Trial Form */}
    <div
      ref={formRef}
      className={`bg-gray-50 rounded-xl p-6 shadow-md transition-all duration-500 w-full max-w-sm ${
        formSubmitted ? "opacity-90 scale-95" : "opacity-100 scale-100"
      }`}
      style={{ minHeight: "420px" }} // Keep height consistent
    >
      {!formSubmitted ? (
        <>
          <h2 className="text-xl font-bold mb-2 text-center text-gray-800">
            🎁 Get 7-Day Free Trial
          </h2>
          <p className="text-xs text-center text-gray-500 mb-4">
            Full access. No credit card required.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <select
              required
              className="w-full px-3 py-2 rounded-md border border-gray-300 text-sm text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              <option value="" disabled selected>
                I am *
              </option>
              <option value="student">Student</option>
              <option value="business">Business Owner</option>
            </select>

            <input
              type="text"
              required
              placeholder="Name *"
              className="w-full px-3 py-2 rounded-md border border-gray-300 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
            <input
              type="tel"
              required
              placeholder="Phone *"
              className="w-full px-3 py-2 rounded-md border border-gray-300 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
            <input
              type="email"
              required
              placeholder="Email *"
              className="w-full px-3 py-2 rounded-md border border-gray-300 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
            <input
              type="text"
              required
              placeholder="Pincode *"
              className="w-full px-3 py-2 rounded-md border border-gray-300 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />

            <label className="flex items-start space-x-2 text-xs text-gray-600 mt-1">
              <input type="checkbox" required className="mt-0.5 accent-indigo-500" />
              <span>
                I accept the{" "}
                <a href="#" className="text-indigo-600 underline hover:text-indigo-800">
                  Terms & Conditions
                </a>
              </span>
            </label>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2 rounded-md mt-2 shadow-sm transition-all"
            >
              Start Free Trial
            </button>
          </form>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-full text-center text-gray-700 transition-all mt-20">
  <h2 className="text-xl font-bold mb-2 text-green-600">✅ Thank You!</h2>
  <p className="text-sm mb-4">Your 7-day free trial has been activated.</p>
  <p className="text-xs mt-1 text-gray-500">Enjoy full access!</p>
  <div className="mt-4 space-y-3">
    <p className="text-sm text-gray-600">Start exploring now and unlock all premium features!</p>
    
    <p className="text-xs text-gray-500 mt-2">Need help? Visit our <a href="/support" className="text-indigo-600 underline hover:text-indigo-800">Support Center</a>.</p>
  </div>
</div>


      )}
    </div>

    {/* RIGHT: Auto-Sliding Cards */}
    <div className="relative w-full overflow-hidden bg-gray-100 rounded-xl p-4">
      <div className="flex animate-slide gap-6">
        {[ 
          {
            title: "Seamless Accounting",
            icon: "📊",
            description: "Manage your finances with real-time reports and error-free entries."
          },
          {
            title: "Inventory Management",
            icon: "📦",
            description: "Track stock levels, purchases, and deliveries in one place."
          },
          {
            title: "Easy GST Filing",
            icon: "🧾",
            description: "Generate GST reports and file returns with just a few clicks."
          },
          {
            title: "Sales & Purchase Tracking",
            icon: "💼",
            description: "Monitor every transaction and analyze sales patterns easily."
          },
          {
            title: "Multi-user Access",
            icon: "👥",
            description: "Add your team and work collaboratively with custom roles."
          },
          {
            title: "Powerful Reports",
            icon: "📈",
            description: "Visual dashboards and detailed reports for better decision making."
          },
        ].map((item, i) => (
          <div
            key={i}
            className="min-w-[300px] max-w-[300px] bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-all"
          >
            <div className="text-4xl mb-2">{item.icon}</div>
            <h3 className="text-base font-semibold text-gray-800">{item.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{item.description}</p>
          </div>
        ))}
      </div>
    </div>

  </div>

  {/* BELOW: New Innovative Section (Gradient, Shapes, and Animations) */}
  <div className="w-full mt-2 flex justify-end"> 
  <div className="relative w-full max-w-2xl">
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-40 rounded-xl"></div>
    <div className="absolute inset-0 flex justify-center items-center">
      {/* <h2 className="text-2xl font-extrabold text-white z-10">
        Boost Your Business With Cutting-Edge Solutions
      </h2> */}
    </div>
    <div className="absolute bottom-0 left-0 right-0 bg-white p-6 rounded-xl shadow-lg z-10">
      <div className="flex justify-center items-center">
        <div className="text-center p-6 bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-600 text-white rounded-lg shadow-md transform hover:scale-105 transition-all">
          <p className="text-lg">Start your journey to success today!</p>
          <button
        onClick={handleGetStarted}
        className="mt-4 py-2 px-4 bg-indigo-800 text-white rounded-lg hover:bg-indigo-900 transition-all"
      >
        Get Started
      </button>

        </div>
      </div>
    </div>
  </div>
</div>

</section>

        {/* Final Assurance */}
        <div className="text-center mt-20">
          <Lock className="h-12 w-12 text-[#1AC8A6] mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">100% Secure & Confidential</h3>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Your information is protected with bank-level encryption. We never share your data with third parties.
          </p>
        </div>
      </div>
      
    </section>
    <Footer />
    </div>
    
  );
};

export default StartFreeTrial;
