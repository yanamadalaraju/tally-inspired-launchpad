
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import WebinarForm from '../components/WebinarForm';
import BusinessChallenges from '../components/BusinessChallenges';
import { ArrowRight, Activity, Shield, Database, PieChart, Server, Users as UsersIcon, ChevronRight, Lock, RefreshCw } from "lucide-react";

const CombinedLanding = () => {
  // Add a scroll reveal effect
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
          element.classList.add('animate-fade-in');
          element.classList.remove('opacity-0');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const keyFeatures = [
    {
      title: "Smart Accounting",
      description: "Automated bookkeeping with AI-driven reconciliation that reduces accounting errors by 98%.",
      icon: <Activity className="h-10 w-10 text-secondary" />
    },
    {
      title: "GST Compliance",
      description: "One-click GST filing with built-in validation to ensure 100% compliance with latest regulations.",
      icon: <Shield className="h-10 w-10 text-secondary" />
    },
    {
      title: "Inventory Management",
      description: "Real-time inventory tracking across multiple locations with predictive replenishment suggestions.",
      icon: <Database className="h-10 w-10 text-secondary" />
    },
    {
      title: "Business Analytics",
      description: "Comprehensive business insights with customizable dashboards and automated reporting.",
      icon: <PieChart className="h-10 w-10 text-secondary" />
    }
  ];

  const customerResources = [
    {
      title: "Access Your Account",
      description: "Log in to your dashboard to manage your business operations",
      icon: <Lock className="h-8 w-8 text-primary" />,
      buttonText: "Login Now",
      link: "#"
    },
    {
      title: "Latest Updates",
      description: "Discover new features and improvements to optimize your business",
      icon: <RefreshCw className="h-8 w-8 text-primary" />,
      buttonText: "See What's New",
      link: "#"
    },
    {
      title: "Support Resources",
      description: "Access tutorials, guides and connect with our customer support team",
      icon: <Server className="h-8 w-8 text-primary" />,
      buttonText: "Get Help",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section with Dual CTAs */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-primary via-primary-light to-primary text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                The Ultimate Business Management Solution
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-lg">
                Whether you're new to our platform or an existing customer, discover how our comprehensive solution can transform your business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary-light text-white font-medium group" onClick={() => document.getElementById('new-customers')?.scrollIntoView({ behavior: 'smooth' })}>
                  <span>New Customer? Learn More</span>
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
  size="lg"
  variant="outline"
  className="bg-white hover:bg-gray-100 text-primary group border border-gray-200 hover:border-gray-300 hover:text-gray-800 transition"
  onClick={() =>
    document.getElementById('existing-customers')?.scrollIntoView({ behavior: 'smooth' })
  }
>
  <span className="transition-colors duration-200">Existing Customer? Login</span>
  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
</Button>

              </div>
            </div>
            
            <div
  className="lg:w-1/2 relative animate-slide-up opacity-0"
  style={{ animationDelay: '0.3s' }}
>
  <div className="relative">
    {/* Gradient blur background with rotation */}
    <div className="absolute inset-0 bg-gradient-to-br from-purple-300/30 to-transparent rounded-2xl backdrop-blur-sm shadow-xl transform rotate-6"></div>

    {/* Main Card */}
    <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_10px_25px_rgba(0,0,0,0.1)] overflow-hidden border border-gray-200 transition-all duration-300 hover:scale-[1.01]">
      
      {/* Top window-like header */}
      <div className="bg-gray-900 h-10 flex items-center px-4 rounded-t-3xl">
        <div className="flex space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500 shadow-md"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500 shadow-md"></div>
          <div className="h-3 w-3 rounded-full bg-green-500 shadow-md"></div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Dashboard Title */}
        <div>
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-200 via-pink-200 to-yellow-100 text-purple-700 text-sm font-semibold rounded-lg shadow-sm mb-1">
            🚀 Business Dashboard
          </div>
          <p className="text-sm text-gray-500">Key metrics at a glance</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl bg-gradient-to-br from-green-100 via-green-50 to-white p-4 shadow-md hover:shadow-lg transition-all duration-200">
            <p className="text-xs text-green-700 font-medium">Revenue</p>
            <h3 className="text-2xl font-bold text-gray-800 mt-1">₹24,500</h3>
            <span className="text-green-500 text-xs mt-1 block">↑ +12% this month</span>
          </div>
          <div className="rounded-xl bg-gradient-to-br from-blue-100 via-blue-50 to-white p-4 shadow-md hover:shadow-lg transition-all duration-200">
            <p className="text-xs text-blue-700 font-medium">Users</p>
            <h3 className="text-2xl font-bold text-gray-800 mt-1">152</h3>
            <span className="text-blue-400 text-xs mt-1 block">+5 new today</span>
          </div>
        </div>

        {/* Progress or Placeholder */}
        <div className="space-y-3">
          <div className="h-3 rounded-full bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 w-full"></div>
          <div className="h-3 rounded-full bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 w-5/6"></div>
          <div className="h-3 rounded-full bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 w-4/6"></div>
        </div>
      </div>
    </div>
  </div>
</div>


          </div>
        </div>
      </section>

      {/* Business Challenges Section */}
      <BusinessChallenges />

      {/* For New Customers Section */}
      <section id="new-customers" className="py-12 md:py-20 bg-white -mt-12">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12 reveal-on-scroll opacity-0">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Discover Our Powerful Features</h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Our comprehensive business management solution brings together everything you need to streamline operations and drive growth.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
      {keyFeatures.map((feature, index) => (
        <div key={index} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:transform hover:translate-y-[-5px] reveal-on-scroll opacity-0" style={{ animationDelay: `${index * 0.1}s` }}>
          <div className="bg-primary/5 p-4 rounded-lg inline-block mb-5">
            {feature.icon}
          </div>
          <h3 className="text-xl font-bold mb-3 text-primary">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>

    <div className="text-center reveal-on-scroll opacity-0">
      <Button 
        variant="default"
        className="bg-secondary hover:bg-secondary-light text-white"
        size="lg"
        onClick={() => document.getElementById('webinar')?.scrollIntoView({ behavior: 'smooth' })}
      >
        Register for Free Demo
      </Button>
    </div>
  </div>
</section>



      {/* For Existing Customers Section */}
      <section id="existing-customers" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal-on-scroll opacity-0">
            <div className="inline-block bg-secondary/20 text-secondary px-4 py-1 rounded-full text-sm font-medium mb-4">
              Existing Customers
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Maximize Your Investment</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Access your account, discover the latest updates, and get support to make the most of our business management solution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {customerResources.map((resource, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 reveal-on-scroll opacity-0" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="p-6">
                  <div className="bg-primary/10 p-3 rounded-lg inline-block mb-4">
                    {resource.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary">{resource.title}</h3>
                  <p className="text-gray-600 mb-6">{resource.description}</p>
                  <Button 
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                    asChild
                  >
                    <a href={resource.link}>{resource.buttonText}</a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 reveal-on-scroll opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Over 2.5 Million Businesses</h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              Join the community of successful businesses that have transformed their operations with our solution.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 reveal-on-scroll opacity-0" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">2.5M+</div>
              <p className="text-gray-200">Businesses Empowered</p>
            </div>
            <div className="p-6 reveal-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">98%</div>
              <p className="text-gray-200">Customer Satisfaction</p>
            </div>
            <div className="p-6 reveal-on-scroll opacity-0" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">15M+</div>
              <p className="text-gray-200">Transactions Processed</p>
            </div>
            <div className="p-6 reveal-on-scroll opacity-0" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">24/7</div>
              <p className="text-gray-200">Expert Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Webinar Registration Form */}
      <WebinarForm />

      <Footer />
    </div>
  );
};

export default CombinedLanding;
