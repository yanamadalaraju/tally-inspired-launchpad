
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import ScrollAnimateWrapper from '../components/ScrollAnimateWrapper';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart2, Download, BookOpen, MessageSquare, RefreshCw, FileText, Users, Shield } from "lucide-react";

const ExistingCustomers = () => {
  const updateFeatures = [
    {
      title: "AI-Powered Financial Insights",
      description: "Our latest update introduces AI-driven financial analysis that identifies cost-saving opportunities and predicts cash flow trends.",
      icon: <BarChart2 className="h-8 w-8 text-secondary" />,
      label: "New"
    },
    {
      title: "One-Click GST Reconciliation",
      description: "The enhanced GST module now automatically reconciles your returns with vendor data, reducing errors by up to 95%.",
      icon: <Shield className="h-8 w-8 text-secondary" />,
      label: "Enhanced"
    },
    {
      title: "Multi-Branch Inventory Sync",
      description: "Real-time inventory synchronization across multiple locations with intelligent stock transfer recommendations.",
      icon: <RefreshCw className="h-8 w-8 text-secondary" />,
      label: "Updated"
    }
  ];
  
  const trainingResources = [
    {
      title: 'Getting Started with TallyPrime',
      duration: '1 hour',
      level: 'Beginner',
      image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Advanced Financial Management',
      duration: '2 hours',
      level: 'Intermediate',
      image: 'https://images.pexels.com/photos/7681094/pexels-photo-7681094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Inventory & Stock Management',
      duration: '1.5 hours',
      level: 'Intermediate',
      image: 'https://images.pexels.com/photos/7821573/pexels-photo-7821573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Tax Compliance & Filing',
      duration: '2 hours',
      level: 'Advanced',
      image: 'https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];
  const resources = [
    {
      title: "Advanced User Training",
      description: "Master the latest features with our comprehensive training sessions designed for existing users.",
      date: "Every Tuesday",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      link: "#"
    },
    {
      title: "Monthly Update Webinar",
      description: "Stay informed about the latest enhancements and upcoming features in our product roadmap.",
      date: "First Thursday of Each Month",
      icon: <Users className="h-8 w-8 text-primary" />,
      link: "#"
    },
    {
      title: "New Feature Documentation",
      description: "Detailed guides on implementing and optimizing our newest features for your business.",
      date: "Updated Weekly",
      icon: <FileText className="h-8 w-8 text-primary" />,
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-10 md:mb-0">
              <div className="inline-block bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-medium mb-4">
                Valued Customer
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Unlock Even More Value From Your Investment
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-2xl">
                Discover the latest updates, access exclusive resources, and maximize your business management solution's capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary-light text-white font-medium">
                  Access Your Account
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white">
                  Contact Support
                </Button>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/30 to-transparent rounded-lg transform rotate-6"></div>
                <div className="relative bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200 p-6 text-primary">
                  <h3 className="text-xl font-bold mb-2">Customer Portal</h3>
                  <div className="space-y-4 mt-4">
                    <div className="flex items-center">
                      <RefreshCw className="h-5 w-5 text-secondary mr-3" />
                      <span className="text-gray-700">Latest Updates</span>
                    </div>
                    <div className="flex items-center">
                      <Download className="h-5 w-5 text-secondary mr-3" />
                      <span className="text-gray-700">Resources</span>
                    </div>
                    <div className="flex items-center">
                      <MessageSquare className="h-5 w-5 text-secondary mr-3" />
                      <span className="text-gray-700">Support Tickets</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-primary hover:bg-primary-light">
                    Login Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Latest Software Updates</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're constantly improving our platform to better serve your business needs. 
              Here are the newest enhancements available in your account.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {updateFeatures.map((feature, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-secondary/40">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div className="bg-secondary/10 p-3 rounded-lg">
                      {feature.icon}
                    </div>
                    <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-xs font-medium">
                      {feature.label}
                    </span>
                  </div>
                  <CardTitle className="mt-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training & Resources Section */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Training & Resources</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Take advantage of our exclusive customer resources to maximize your software investment and boost productivity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="p-6">
                  <div className="bg-primary/10 p-3 rounded-lg inline-block mb-4">
                    {resource.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-primary">{resource.title}</h3>
                  <p className="text-sm text-secondary font-medium mb-3">{resource.date}</p>
                  <p className="text-gray-600 mb-6">{resource.description}</p>
                  <a 
                    href={resource.link} 
                    className="text-secondary hover:text-secondary-light font-medium flex items-center"
                  >
                    Register Now <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-primary hover:bg-primary-light text-white">View All Resources</Button>
          </div>
        </div>
      </section>

      {/* Training Resources Section */}
      <section className="py-20 mt-[40px] bg-[#F7FAFC] rounded-2xl">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <ScrollAnimateWrapper animation="fade-up">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[rgb(43, 83, 97)] mb-4">
          Learn & Grow with TallyPrime
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Master TallyPrime with expert-led tutorials, quick guides, and certification courses designed for businesses and professionals.
        </p>
      </div>
    </ScrollAnimateWrapper>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {trainingResources.map((resource, index) => (
        <ScrollAnimateWrapper 
          key={index} 
          animation="fade-up" 
          delay={index * 100}
        >
          <div className="bg-white rounded-xl shadow-md overflow-hidden h-full">
            <div className="relative h-48">
              <img 
                src={resource.image} 
                alt={resource.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <div className="flex space-x-2 mb-2">
                    <span className="px-2 py-1 bg-[#1AC8A6] text-xs rounded-md">
                      {resource.duration}
                    </span>
                    <span className="px-2 py-1 bg-gray-700 text-xs rounded-md">
                      {resource.level}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold">{resource.title}</h3>
                </div>
              </div>
            </div>
            <div className="p-4">
              <a 
                href="#" 
                className="text-[#1AC8A6] font-medium hover:text-[#17b09a] flex items-center"
              >
                Watch Now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </ScrollAnimateWrapper>
      ))}
    </div>

    <ScrollAnimateWrapper animation="fade-up" delay={400}>
      <div className="mt-12 text-center">
        <Button
          size="lg"
          className="bg-[#1AC8A6] hover:bg-[#17b09a] text-[#0B2C4D] font-semibold px-6 py-3 rounded-full shadow-md transition-all"
        >
          Explore Training Center
        </Button>
      </div>
    </ScrollAnimateWrapper>
  </div>
</section>

<section className="py-20 bg-gradient-to-r from-primary to-primary-light text-white shadow-inner mb-10">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <ScrollAnimateWrapper animation="fade-up">
      <div className="text-center">
        <div className="inline-block bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-medium mb-4">
          Premium Upgrade
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
          Ready to ✳ Upgrade Your TallyPrime?
        </h2>
        <p className="text-lg md:text-xl mb-10 text-white/80 max-w-3xl mx-auto">
          Experience faster workflows, smarter tools, and exclusive capabilities. Upgrade now and stay ahead with the latest version of TallyPrime.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button 
            size="lg" 
            className="bg-secondary hover:bg-secondary-light text-white font-medium px-6 py-3 rounded-full shadow-lg transition-all duration-200"
          >
            Explore Upgrade Options
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white/20 hover:border-white px-6 py-3 rounded-full transition-all duration-200"
            style={{ borderColor: '#ffffff', color: 'rgb(7, 7, 7)' }} // Ensures white text and border color
          >
            View New Features
          </Button>
        </div>
      </div>
    </ScrollAnimateWrapper>
  </div>
</section>




      <Footer />
    </div>
  );
};

export default ExistingCustomers;
