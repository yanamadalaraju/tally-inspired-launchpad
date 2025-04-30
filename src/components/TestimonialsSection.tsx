
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CFO, Tech Innovators Inc.",
      company: "Tech Innovators",
      image: null, // Will use fallback
      content: "BizManager has completely transformed how we handle our accounting and inventory. The GST compliance features alone have saved us countless hours of work every month.",
      rating: 5
    },
    {
      name: "Michael Chen",
      position: "Owner, Chen's Retail",
      company: "Chen's Retail",
      image: null, // Will use fallback
      content: "As a small business owner, I needed an all-in-one solution that wouldn't break the bank. This software delivers on all fronts with excellent support when I need help.",
      rating: 5
    },
    {
      name: "Priya Patel",
      position: "Operations Manager, Global Services",
      company: "Global Services",
      image: null, // Will use fallback
      content: "The real-time reporting has given us insights we never had before. We can now make data-driven decisions quickly, which has directly improved our bottom line.",
      rating: 4
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Businesses across industries trust our software to streamline their operations
            and drive growth. Here's what they have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md p-6 border border-gray-100 h-full flex flex-col"
            >
              <div className="flex-grow">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              </div>
              
              <div className="flex items-center">
                <Avatar className="h-12 w-12 mr-4">
                  {testimonial.image ? (
                    <AvatarImage src={testimonial.image} />
                  ) : (
                    <AvatarFallback className="bg-primary text-white">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  )}
                </Avatar>
                <div>
                  <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-gradient-to-r from-primary to-primary-light rounded-xl shadow-xl overflow-hidden">
            <div className="p-6 md:p-10 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Join thousands of satisfied businesses
              </h3>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Experience the difference our business management software can make for your operations, 
                compliance, and bottom line.
              </p>
              <button className="bg-white text-primary font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors mx-auto">
                Start Your Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
