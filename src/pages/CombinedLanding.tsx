
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import WebinarForm from '../components/WebinarForm';
import { ArrowRight, Activity, Shield, Database, PieChart, Server, Users, ChevronRight, Lock, RefreshCw } from "lucide-react";

const CombinedLanding = () => {
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
                <Button size="lg" className="bg-secondary hover:bg-secondary-light text-white font-medium group">
                  <span>New Customer? Learn More</span>
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="bg-white hover:bg-gray-100 text-primary border-white hover:border-white group">
                  <span>Existing Customer? Login</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative animate-slide-up opacity-0" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/30 to-transparent rounded-lg transform rotate-6"></div>
                <div className="relative bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
                  <div className="bg-gray-800 h-10 flex items-center px-4">
                    <div className="flex space-x-2">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between mb-6">
                      <div>
                        <div className="h-8 bg-primary/10 rounded w-48 mb-2 flex items-center px-3 text-sm font-medium text-primary">Business Dashboard</div>
                        <div className="h-4 bg-gray-200 rounded w-32"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="h-20 bg-secondary/10 rounded p-3">
                        <div className="h-3 bg-secondary/30 rounded w-20 mb-2"></div>
                        <div className="h-6 flex items-center font-bold">₹24,500</div>
                        <div className="h-3 bg-green-200 rounded w-16"></div>
                      </div>
                      <div className="h-20 bg-blue-50 rounded p-3">
                        <div className="h-3 bg-blue-200 rounded w-20 mb-2"></div>
                        <div className="h-6 flex items-center font-bold">152</div>
                        <div className="h-3 bg-blue-200 rounded w-16"></div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 bg-gray-200 rounded-full w-full"></div>
                      <div className="h-4 bg-gray-200 rounded-full w-5/6"></div>
                      <div className="h-4 bg-gray-200 rounded-full w-4/6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For New Customers Section */}
      <section id="new-customers" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Discover Our Powerful Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive business management solution brings together everything you need to streamline operations and drive growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:transform hover:translate-y-[-5px]">
                <div className="bg-primary/5 p-4 rounded-lg inline-block mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
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
          <div className="text-center mb-12">
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
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300">
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">20,000+</div>
              <p className="text-gray-200">Businesses Empowered</p>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">98%</div>
              <p className="text-gray-200">Customer Satisfaction</p>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">5M+</div>
              <p className="text-gray-200">Transactions Processed</p>
            </div>
            <div className="p-6">
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
