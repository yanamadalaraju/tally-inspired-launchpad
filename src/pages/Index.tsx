
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ValueProposition from '../components/ValueProposition';
import FeatureSection from '../components/FeatureSection';
import WebinarForm from '../components/WebinarForm';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ValueProposition />
      <FeatureSection />
      <WebinarForm />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
