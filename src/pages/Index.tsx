
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
import GrowthSection from '@/components/GrowthSection';
import growthImage from '../assets/engagement_feature.jpg'
import VideoAdSection from '@/components/VideoAdSection';
import CountdownSection from '@/components/CountdownSection';
import PartnersSection from '@/components/PartnersSection';
import image from '../assets/pexelmoney.webp';
import CarouselSection from '@/components/CarouselSection';
import FAQSection from '@/components/FAQSection';
import BusinessJourney from '@/components/BusinessJourney';
import FeaturesDiagram from '@/components/FeaturesDiagram';



import SendEmailPage from '@/components/newcustomer/SendEmailPage';
import SevenCircleChart from '@/components/ConcentricSegmentedCircle';
import StageCircleDiagram from '@/components/ConcentricSegmentedCircle';

const Index = () => {

  const handleClick = () => {
    const formSection = document.getElementById('formSection');
    if (formSection) {
      const offsetTop = formSection.offsetTop; // Get the top position of the form
      const offset = 80; // Adjust this value to your header height or preferred offset

      window.scrollTo({
        top: offsetTop - offset, // Subtract the offset so the form is fully visible
        behavior: 'smooth',
      });
    }
  };
  
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
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BusinessJourney />
      <FeaturesDiagram />
      {/* <StageCircleDiagram /> */}
      <ValueProposition />
      <div>
      <GrowthSection imageUrl={growthImage} />
    </div>
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
            src={image}
            alt="TallyPrime Dashboard" 
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-blue-900 bg-opacity-30 flex items-center justify-center">
            {/* <div className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center cursor-pointer hover:bg-opacity-100 transition-all">
              <div className="w-0 h-0 border-t-8 border-t-transparent border-l-14 border-l-blue-700 border-b-8 border-b-transparent ml-1"></div>
            </div> */}
          </div>
        </div>
      </ScrollAnimateWrapper>
    </div>
  </div>
</section>

      <WebinarForm />
      {/* <CarouselSection /> */}
      <TestimonialsSection />

      {/* <VideoAdSection /> */}
      <CountdownSection />
      {/* <PartnersSection /> */}
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
      
      

       {/* FAQ Section */}
       {/* <section className="py-4 mt-[40px] bg-[#F7FAFC] rounded-2xl">
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
          <button
  className="bg-[#1AC8A6] hover:bg-[#17b09a] text-[#0B2C4D] font-semibold px-4 py-2 rounded-full shadow-md transition-all" onClick={handleClick}
>
Get Expert Help
</button>

        </div>
      </ScrollAnimateWrapper>
    </div>
  </div>
</section> */}
       
      
      <Footer />
    </div>
  );
};

export default Index;
