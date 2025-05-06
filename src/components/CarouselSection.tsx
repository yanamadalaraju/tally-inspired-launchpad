import React, { useRef, useState, useEffect } from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider, KeenSliderInstance } from 'keen-slider/react';

// Static imports of 15 images from assets
import work1 from '../assets/workflow/work-1.jpg';
import work2 from '../assets/workflow/work-2.jpg';
import work3 from '../assets/workflow/work-3.jpg';
import work4 from '../assets/workflow/work-4.jpg';
import work5 from '../assets/workflow/work-5.jpg';
import work6 from '../assets/workflow/work-6.jpg';
import work7 from '../assets/workflow/work-7.jpg';
import work8 from '../assets/workflow/work-8.jpg';
import work9 from '../assets/workflow/work-9.jpg';
import work10 from '../assets/workflow/work-10.jpg';
import work11 from '../assets/workflow/work-11.jpg';
import work12 from '../assets/workflow/work-12.jpg';
import work13 from '../assets/workflow/work-13.jpg';
import work14 from '../assets/workflow/work-14.jpg';
import work15 from '../assets/workflow/work-15.jpg';

interface WorkflowImage {
  src: string;
  caption: string;
}

const imageSources = [
  work1, work2, work3, work4, work5,
  work6, work7, work8, work9, work10,
  work11, work12, work13, work14, work15,
];

const images: WorkflowImage[] = imageSources.map((src, i) => ({
  src,
  caption: `Step ${i + 1}: Description of this step in your workflow`,
}));

const CarouselSection: React.FC = () => {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'free-snap',
    slides: {
      perView: 1,
      spacing: 20,
    },
  });

  // Auto-slide feature using setInterval
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (slider && slider.current) {
        slider.current.next(); // Move to the next slide
      }
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [slider]);

  const handlePrev = () => {
    if (slider && slider.current) {
      slider.current.prev(); // Navigate to the previous slide
    }
  };

  const handleNext = () => {
    if (slider && slider.current) {
      slider.current.next(); // Navigate to the next slide
    }
  };

  return (
    <div className="mt-16">
      <h3 className="text-3xl font-bold text-center text-primary mb-8">7 Secrets Bringing Prosperity to Your Business</h3>
      <div ref={sliderRef} className="keen-slider relative rounded-lg overflow-hidden shadow-lg bg-gradient-to-r from-blue-500 via-teal-500 to-green-500">
        {images.map((img, index) => (
          <div key={index} className="keen-slider__slide flex flex-col items-center justify-center px-6 py-8">
            <img
              src={img.src}
              alt={`Workflow step ${index + 1}`}
              className="w-full max-w-4xl h-80 object-cover rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105"
            />
            <p className="mt-4 text-sm text-white text-center max-w-xl">{img.caption}</p>
          </div>
        ))}
        {/* Left Arrow Button */}
        <button
          className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-white text-primary p-3 rounded-full shadow-2xl hover:bg-primary hover:text-white transition-all duration-300"
          onClick={handlePrev}
        >
          &#8592;
        </button>
        {/* Right Arrow Button */}
        <button
          className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-white text-primary p-3 rounded-full shadow-2xl hover:bg-primary hover:text-white transition-all duration-300"
          onClick={handleNext}
        >
          &#8594;
        </button>
      </div>
      <p className="text-center text-lg text-gray-700 mt-8 max-w-2xl mx-auto">
        Follow these steps to better understand the process and how it helps optimize your workflow and achieve long-term business success.
      </p>
    </div>
  );
};

export default CarouselSection;
