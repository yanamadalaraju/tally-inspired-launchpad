
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChartBar, Shield } from "lucide-react";

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
              <Button size="lg" className="bg-secondary hover:bg-secondary-light text-white font-medium">
                Register for Free Webinar
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white">
                Start Free Trial
              </Button>
            </div>
            <div className="flex items-center mt-8 space-x-6">
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2 text-secondary" />
                <span className="text-sm">GST Compliant</span>
              </div>
              <div className="flex items-center">
                <ChartBar className="h-5 w-5 mr-2 text-secondary" />
                <span className="text-sm">Real-time Reports</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative animate-slide-up opacity-0" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/30 to-transparent rounded-lg transform rotate-6"></div>
              <div className="relative bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
