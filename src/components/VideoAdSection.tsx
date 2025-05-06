import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const VideoAdSection = () => {
  const handleClick = () => {
    const formSection = document.getElementById('formSection');
    if (formSection) {
      const offsetTop = formSection.offsetTop;
      const offset = 80;
      window.scrollTo({ top: offsetTop - offset, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-r from-primary to-secondary py-16 md:py-24 text-white relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12">
          {/* Left Column: Video */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-0 pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/vqDFrbA67HU"
                title="Advertising Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
              Unlock Your Business Potential with Our Solution
            </h2>
            <p className="text-sm sm:text-base mb-6 text-gray-100">
              Discover how our product can elevate your business. With cutting-edge features, automation tools, and powerful insights, we help you streamline operations, increase revenue, and stay ahead of the competition.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              {/* Uncomment this if needed */}
              {/* <Button
                size="lg"
                className="bg-gradient-to-r from-secondary to-primary text-white hover:from-secondary-dark hover:to-primary-dark transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Watch Full Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button> */}
              
              <Button
                size="lg"
                variant="outline"
                className="bg-gradient-to-r from-secondary to-primary text-white hover:from-secondary-dark hover:to-primary-dark transition-all duration-300 transform hover:scale-105 shadow-lg"
                onClick={handleClick}
              >
                Let’s Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoAdSection;
