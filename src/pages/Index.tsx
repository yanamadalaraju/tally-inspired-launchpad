
import React from 'react';
import { ShieldCheck, BarChart, Database, Users, Clock, CreditCard, Award, Star, Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ValueProposition from '../components/ValueProposition';
import FeatureSection from '../components/FeatureSection';
import WebinarForm from '../components/WebinarForm';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';
import ScrollAnimateWrapper from '../components/ScrollAnimateWrapper';
import FeatureCard from '@/components/FeatureCard';
import { Button } from 'react-day-picker';

const Index = () => {
  const features = [
    {
      icon: Database,
      title: 'Unified Business Data',
      description: 'Centralize all your business data in one place with TallyPrime\'s integrated platform for better decision-making.'
    },
    {
      icon: BarChart,
      title: 'Real-time Analytics',
      description: 'Get instant insights with customizable dashboards and reports to track key business metrics.'
    },
    {
      icon: CreditCard,
      title: 'Financial Management',
      description: 'Streamline accounting, banking, taxation, and financial reporting with comprehensive tools.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Enable seamless collaboration with role-based access and real-time data sharing across departments.'
    },
    {
      icon: ShieldCheck,
      title: 'Data Security',
      description: 'Keep your business data safe with enterprise-grade security features and regular backups.'
    },
    {
      icon: Clock,
      title: 'Process Automation',
      description: 'Save time and reduce errors by automating routine business processes and workflows.'
    }
  ];
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ValueProposition />
      <FeatureSection />
      {/* Product Screenshot Section */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <ScrollAnimateWrapper animation="fade-right">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Experience Seamless Business Management
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            TallyPrime offers an intuitive interface designed for efficiency. Our dashboards provide clear visibility into your business performance, while our comprehensive reporting tools help you make data-driven decisions.
          </p>
          <ul className="space-y-4 mb-8">
            {[
              "User-friendly interface requiring minimal training",
              "Customizable dashboards for different business roles",
              "Real-time reporting and analytics",
              "Mobile accessibility for on-the-go management",
              "Seamless integration with existing business systems"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          
        </div>
      </ScrollAnimateWrapper>
      
      <ScrollAnimateWrapper animation="fade-left">
        <div className="relative rounded-lg overflow-hidden shadow-xl">
          <img 
            src="https://images.pexels.com/photos/4475523/pexels-photo-4475523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="TallyPrime Dashboard" 
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-blue-900 bg-opacity-30 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center cursor-pointer hover:bg-opacity-100 transition-all">
              <div className="w-0 h-0 border-t-8 border-t-transparent border-l-14 border-l-blue-700 border-b-8 border-b-transparent ml-1"></div>
            </div>
          </div>
        </div>
      </ScrollAnimateWrapper>
    </div>
  </div>
</section>

      <WebinarForm />
      <TestimonialsSection />
       {/* Features Section */}
       <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimateWrapper animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Everything You Need to Run Your Business
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                TallyPrime Solutions offers a comprehensive suite of business management tools designed to streamline operations and boost productivity.
              </p>
            </div>
          </ScrollAnimateWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ScrollAnimateWrapper 
                key={index} 
                animation="fade-up" 
                delay={index * 100} 
                className="h-full"
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  className="h-full"
                />
              </ScrollAnimateWrapper>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
