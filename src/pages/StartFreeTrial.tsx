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
import ScrollAnimateWrapper from '../components/ScrollAnimateWrapper';
import PricingCard from "@/components/PricingCard";




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
  const pricingPlans = [
    {
      title: "Silver",
      price: "₹18,000",
      period: "year",
      description: "Essential features for small businesses",
      features: [
        { text: "Single User", available: true },
        { text: "Accounting & Finance", available: true },
        { text: "Basic Inventory Management", available: true },
        { text: "Standard Reports", available: true },
        { text: "GST Filing", available: true },
        { text: "Email Support", available: true },
        { text: "Advanced Analytics", available: false },
        { text: "Multi-user Access", available: false },
      ],
      buttonText: "Buy Now",
    },
    {
      title: "Gold",
      price: "₹36,000",
      period: "year",
      description: "Advanced features for growing businesses",
      features: [
        { text: "Up to 5 Users", available: true },
        { text: "All Silver Features", available: true },
        { text: "Advanced Inventory Management", available: true },
        { text: "Custom Reports", available: true },
        { text: "Banking Integration", available: true },
        { text: "Priority Support", available: true },
        { text: "Advanced Analytics", available: true },
        { text: "API Access", available: false },
      ],
      isPopular: true,
      buttonText: "Buy Now",
    },
    {
      title: "Platinum",
      price: "₹54,000",
      period: "year",
      description: "Enterprise-grade solutions for large businesses",
      features: [
        { text: "Unlimited Users", available: true },
        { text: "All Gold Features", available: true },
        { text: "Multi-location Management", available: true },
        { text: "Advanced Analytics", available: true },
        { text: "API Access", available: true },
        { text: "Dedicated Account Manager", available: true },
        { text: "Custom Integrations", available: true },
        { text: "24/7 Premium Support", available: true },
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline",
    }
  ];

  const faqItems = [
    {
      question: 'How do I update to the latest version of TallyPrime?',
      answer: 'You can update TallyPrime by accessing the "Help" menu and selecting "Check for Updates." Alternatively, you can download the latest version from our website and install it over your existing installation. Your data will be preserved during the update process.'
    },
    {
      question: 'How can I back up my TallyPrime data?',
      answer: 'TallyPrime offers automated and manual backup options. Go to "Company Info" > "Backup" to create a manual backup. For automated backups, configure the settings under "F12: Configure" > "Advanced Configuration" > "Data Configuration."'
    },
    {
      question: 'I\'ve forgotten my TallyPrime password. What should I do?',
      answer: 'If you\'ve forgotten your password, please contact our support team with your license details. We\'ll verify your identity and help you reset your password. For security reasons, we cannot reset passwords without proper verification.'
    },
    {
      question: 'How do I transfer my license to a new computer?',
      answer: 'To transfer your TallyPrime license to a new computer, you\'ll need to deactivate it on your current system first. Go to "Help" > "Activate License" > "Deactivate License." Then, install TallyPrime on your new computer and activate it using your existing license key.'
    },
    {
      question: 'Can I use TallyPrime on multiple devices?',
      answer: 'TallyPrime licensing is based on the number of users. Single-user licenses can be installed on one system at a time. Multi-user licenses allow concurrent access based on the number of users purchased. You can always upgrade your license if you need more users.'
    }
  ];

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
        <div className="grid md:grid-cols-3 gap-4 mb-8">
  <div className="bg-[#EDF1F7] text-gray-800 p-4 rounded-xl shadow hover:shadow-md transition-shadow border-l-4 border-[#1AC8A6]">
    <PieChart className="h-8 w-8 text-[#1AC8A6] mb-2" />
    <h3 className="text-lg font-semibold mb-2">Complete Accounting</h3>
    <p className="text-sm">Manage all your financial operations from invoicing to balance sheets in one place.</p>
  </div>
  <div className="bg-[#EDF1F7] text-gray-800 p-4 rounded-xl shadow hover:shadow-md transition-shadow border-l-4 border-[#1AC8A6]">
    <Database className="h-8 w-8 text-[#1AC8A6] mb-2" />
    <h3 className="text-lg font-semibold mb-2">Smart Inventory</h3>
    <p className="text-sm">Real-time stock tracking with batch-wise and expiry management.</p>
  </div>
  <div className="bg-[#EDF1F7] text-gray-800 p-4 rounded-xl shadow hover:shadow-md transition-shadow border-l-4 border-[#1AC8A6]">
    <ShieldCheck className="h-8 w-8 text-[#1AC8A6] mb-2" />
    <h3 className="text-lg font-semibold mb-2">GST Compliance</h3>
    <p className="text-sm">Automated GST filing, e-invoicing, and e-way bills with 100% accuracy.</p>
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


  
  {/* Pricing Section */}
  <section className="py-6 mt-[40px] bg-[#F7FAFC] rounded-2xl">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <ScrollAnimateWrapper animation="fade-up">
      <div className="text-center mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-[#1AC8A6] mb-1">
          Simple, Transparent Pricing
        </h2>
        <p className="text-sm text-slate-600 max-w-xl mx-auto">
          Choose the plan that fits your business. All plans include core TallyPrime features.
        </p>
      </div>
    </ScrollAnimateWrapper>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {pricingPlans.map((plan, index) => (
        <ScrollAnimateWrapper
          key={index}
          animation="fade-up"
          delay={index * 100}
          className="h-full"
        >
          <PricingCard
            title={plan.title}
            price={plan.price}
            period={plan.period}
            description={plan.description}
            features={plan.features}
            isPopular={plan.isPopular}
            buttonText={plan.buttonText}
            buttonVariant={plan.buttonVariant as any}
          />
        </ScrollAnimateWrapper>
      ))}
    </div>

    <ScrollAnimateWrapper animation="fade-up" delay={300}>
      <div className="mt-5 text-center">
        <p className="text-xs text-slate-600">
          Not sure which plan is right for you?{" "}
          <a href="#" className="text-[#1AC8A6] font-medium underline">
            Contact our sales team
          </a>{" "}
          for a customized solution.
        </p>
      </div>
    </ScrollAnimateWrapper>
  </div>
</section>





        {/* Free Trial Form */}
        <section className="w-full min-h-[80vh] bg-gradient-to-br from-blue-200 to-white px-6 py-10 mt-10">

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
          <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 w-full max-w-xs">
            <p className="text-sm text-indigo-800 font-medium">Check your email for login details</p>
          </div>
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
  <div className="w-full mt-2 flex justify-end relative z-0"> 
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
          <h3 className="text-xl font-semibold mb-2">Accelerate Your Growth with Innovative Solutions</h3>
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

      {/* FAQ Section */}
      <section className="py-4 mt-[40px] bg-[#F7FAFC] rounded-2xl">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <ScrollAnimateWrapper animation="fade-up">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1AC8A6] mb-1">
          Frequently Asked Questions
        </h2>
        <p className="text-sm text-slate-600 max-w-md mx-auto">
          Answers to common questions about TallyPrime Solutions.
        </p>
      </div>
    </ScrollAnimateWrapper>

    <div className="space-y-3">
      {faqItems.map((item, index) => (
        <ScrollAnimateWrapper key={index} animation="fade-up" delay={index * 100}>
          <details className="bg-[#EDF1F7] rounded-lg shadow-sm border-l-4 border-[#1AC8A6] overflow-hidden">
            <summary className="px-4 py-3 cursor-pointer text-[#0B2C4D] font-medium text-sm hover:text-[#1AC8A6] transition-colors">
              {item.question}
            </summary>
            <div className="px-4 py-3 border-t border-[#D1D5DB] bg-white">
              <p className="text-sm text-gray-700">{item.answer}</p>
            </div>
          </details>
        </ScrollAnimateWrapper>
      ))}

      <ScrollAnimateWrapper animation="fade-up" delay={500}>
        <div className="mt-4 text-center">
          <p className="text-gray-600 text-sm mb-2">
            Still need help?
          </p>
          <Button
            size="sm"
            className="bg-[#1AC8A6] hover:bg-[#17b09a] text-[#0B2C4D] font-semibold px-4 py-2 rounded-full shadow-md transition-all"
          >
            Contact Support
          </Button>
        </div>
      </ScrollAnimateWrapper>
    </div>
  </div>
</section>







       
      
    </section>
    <Footer />
    </div>
    
  );
};

export default StartFreeTrial;
